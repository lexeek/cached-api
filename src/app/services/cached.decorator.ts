import { shareReplay } from 'rxjs/operators';

const CACHE_SIZE = 1;
const CACHED_ATTRIBUTE_NAME = 'cached';

export default function Cached() {
  return (target: any, key: string | symbol, descriptor: PropertyDescriptor) => {
    const originalMethod = descriptor.value;
    descriptor.value = function() {
      const fromCache = arguments[getCachedPropertyIndex(originalMethod)];


      if (!this.cacheData$ || !(fromCache === undefined)) {
        Object.defineProperty(target, 'cacheData$', {
          enumerable: true,
          configurable: true,
          writable: true,
          value: originalMethod.apply(this, arguments).pipe(
            shareReplay(CACHE_SIZE)
          )
        });
      }

      return this.cacheData$;
    };

    return descriptor;
  };

  function getCachedPropertyIndex(func) {
    const args = func.toString().match(/function\s.*?\(([^)]*)\)/)[1];
    return args.split(',').findIndex(v => v === CACHED_ATTRIBUTE_NAME);
  }
}
