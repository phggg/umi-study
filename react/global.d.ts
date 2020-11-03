declare module '*.css';
declare module "*.png";
declare module "*.less";
declare module "*.jpg";
declare module "*.jpeg";
declare module "*.gif";
declare module "*.svg";
declare module "*.bmp";

interface TypedPropertyDescriptor<T> {
  enumerable?: boolean;
  configurable?: boolean;
  writable?: boolean;
  value?: T;
  get?: () => T;
  set?: (value: T) => void;
}

declare type ClassDecoratorMy = <TFunction extends Function>(target: TFunction) => TFunction | any;
declare type PropertyDecoratorMy = (target: Object, propertyKey: string | symbol) => void;
declare type MethodDecoratorMy = <T>(target: Object, propertyKey: string | symbol, descriptor: TypedPropertyDescriptor<T>) => TypedPropertyDescriptor<T> | void;
declare type ParameterDecoratorMy = (target: Object, propertyKey: string | symbol, parameterIndex: number) => void;
