import { MainRuntime } from '@teambit/cli';
import { EnvsMain, EnvsAspect } from '@teambit/envs'
import { ReactAspect, ReactMain } from '@teambit/react'
import { TailwindReactAspect } from './tailwind-react.aspect';
import { previewConfig, devServerConfig } from './webpack';

export class TailwindReactMain {
  constructor(private react: ReactMain) {}

  static runtime = MainRuntime;
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

    return new TailwindReactMain(react)
  }
}

TailwindReactAspect.addRuntime(TailwindReactMain);
