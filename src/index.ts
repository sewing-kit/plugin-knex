import {createComposedProjectPlugin} from '@sewing-kit/plugins';
import {
  webpackPlugins,
  noopModuleWithWebpack,
} from '@sewing-kit/plugin-webpack';

export enum Dialect {
  Postgres,
}

export interface Options {
  dialect: Dialect;
}

export function knex({dialect}: Options) {
  if (dialect !== Dialect.Postgres) {
    throw new Error('Only postgres is currently supported.');
  }

  return createComposedProjectPlugin('Knex', [
    noopModuleWithWebpack(/\.\.\/(migrate|seed)/),
    webpackPlugins(async () => {
      const {IgnorePlugin} = await import('webpack');

      return [
        new IgnorePlugin(
          /(mariasql|mssql|mysql|mysql2|oracle|pg-query-stream|sqlite3|strong-oracle)/,
          /\/knex\//,
        ),
        new IgnorePlugin(/pg-native/, /\/pg\//),
      ];
    }),
  ]);
}
