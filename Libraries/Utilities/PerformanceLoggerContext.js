/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow strict
 * @format
 */

import * as React from 'react';
import {useContext} from 'react';
import GlobalPerformanceLogger from './GlobalPerformanceLogger';
import type {IPerformanceLogger} from './createPerformanceLogger';

/**
 * This is a React Context that provides a scoped instance of IPerformanceLogger.
 * We wrap every <AppContainer /> with a Provider for this context so the logger
 * should be available in every component.
 * See React docs about using Context: https://reactjs.org/docs/context.html
 */
const PerformanceLoggerContext: React.Context<IPerformanceLogger> =
  React.createContext(GlobalPerformanceLogger);
if (__DEV__) {
  PerformanceLoggerContext.displayName = 'PerformanceLoggerContext';
}

export function usePerformanceLogger(): IPerformanceLogger {
  return useContext(PerformanceLoggerContext);
}

export default PerformanceLoggerContext;
