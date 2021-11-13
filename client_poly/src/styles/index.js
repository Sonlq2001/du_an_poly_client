import { createGlobalStyle } from 'styled-components';
import { GridColumn } from './config/grid';
import { ResetCss } from './config/reset';
import { Variables } from './config/variables';

const GlobalStyle = createGlobalStyle(() => {
  return /*CSS*/ `
		${Variables()}
		${ResetCss()}
		${GridColumn()}
	`;
});

export default GlobalStyle;
