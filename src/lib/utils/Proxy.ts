interface Props {
  object: {
    [key: string]: (...args: any[]) => any;
  };
  methods: string[];
  callbackBefore: (method: string, ...args: any[]) => void;
  callbackAfter?: (method: string, ...args: any[]) => void;
}
export function watchAnyObject(props: Props) {
    const { callbackAfter, callbackBefore, methods, object } = props;
    for (let method of methods) {
        const original = object[method].bind(object);
        const newMethod = function (...args: any[]) {
          callbackBefore(method, ...args);
          const result = original.apply(null, args);
          if (callbackAfter) callbackAfter(method, ...args);
          return result;
        };
        object[method] = newMethod.bind(object);
      }
  }