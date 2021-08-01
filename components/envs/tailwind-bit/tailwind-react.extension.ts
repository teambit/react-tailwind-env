import { EnvsMain, EnvsAspect } from '@teambit/envs'
import { ReactAspect, ReactMain } from '@teambit/react'
import { previewConfig, devServerConfig } from './webpack';

export class TailwindReactExtension {
  constructor(private react: ReactMain) {}

  static dependencies: any = [EnvsAspect, ReactAspect]

  static async provider([envs, react]: [EnvsMain, ReactMain]) {
    const TailwindReactEnv = react.compose([
      react.useWebpack({
        devServerConfig: [devServerConfig],
        previewConfig: [previewConfig],
      }),
      /*
        Use any of the "react.override..." transformers to
      */
    ]);

    envs.registerEnv(TailwindReactEnv)

    return new TailwindReactExtension(react)
  }
}
