import { Subject } from 'rxjs';
import { shareReplay } from 'rxjs/operators';

const CACHE_SIZE = 1;
const CACHED_ATTRIBUTE_NAME = 'cached';

export default function Cached() {
  return (target: any, key: string | symbol, descriptor: PropertyDescriptor) => {
    const originalMethod = descriptor.value;
    descriptor.value = function() {
      const fromCache = arguments[getCachedPropertyIndex(originalMethod)];

      function initCacheData$() {
        Object.defineProperty(target, 'cacheData$', {
          enumerable: true,
          configurable: true,
          writable: true,
          value: new Subject().pipe(
            shareReplay(CACHE_SIZE)
          )
        });
      }

      if (!this.cacheData$ || !(fromCache === undefined)) {
        if (!this.cacheData$) {
          initCacheData$();
        }
        originalMethod.apply(this, arguments).subscribe(result => {
          this.cacheData$.next({
            result,
            requestTime:
              `${new Date().getHours()}h:${new Date().getMinutes()}m:${new Date().getSeconds()}s:${new Date().getMilliseconds()}ms`
          });
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
