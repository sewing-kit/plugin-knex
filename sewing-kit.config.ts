import {createPackage, Runtime} from '@sewing-kit/config';
import {packageCreateCommonJsOutputPlugin} from '@sewing-kit/plugin-package-commonjs';
import {buildPackageTsDefinitionsPlugin} from '@sewing-kit/plugin-package-typescript';
import {
  quiltWorkspacePlugin,
  quiltPackagePlugin,
} from '@quilted/sewing-kit-plugins';

export default createPackage((pkg) => {
  pkg.runtime(Runtime.Node);
  pkg.entry({root: './src/index'});
  pkg.plugins(
    quiltWorkspacePlugin,
    quiltPackagePlugin,
    buildPackageTsDefinitionsPlugin,
    packageCreateCommonJsOutputPlugin,
  );
});
