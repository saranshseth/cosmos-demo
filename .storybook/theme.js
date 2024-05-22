/**
 * Copyright IBM Corp. 2022
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { create } from '@storybook/theming';
import logo from '../public/cosmos-vertical.png';

/**
 * @see https://storybook.js.org/docs/react/configure/theming
 */
export default create({
  base: 'light',

  // Typography
  fontBase:
    "Montserrat, Arial, 'Helvetica Neue', Helvetica, sans-serif",
  fontCode:
    "'IBM Plex Mono', Menlo, 'DejaVu Sans Mono', 'Bitstream Vera Sans Mono', Courier, monospace",

  brandTitle: 'Cosmos Design System',
  brandUrl: '#',
  brandImage: logo,
  brandTarget: '_blank',
  title: 'Cosmos Design System',
});
