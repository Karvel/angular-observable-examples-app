import { CoreModule } from '../core.module';

export function throwIfAlreadyLoaded(parentModule: CoreModule, moduleName: string): void {
  if (parentModule) {
    throw new Error(`${moduleName} has already been loaded. Import Core modules in the AppModule only.`);
  }
}
