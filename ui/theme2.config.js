// Licensed to the Apache Software Foundation (ASF) under one
// or more contributor license agreements.  See the NOTICE file
// distributed with this work for additional information
// regarding copyright ownership.  The ASF licenses this file
// to you under the Apache License, Version 2.0 (the
// "License"); you may not use this file except in compliance
// with the License.  You may obtain a copy of the License at
//
//   http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing,
// software distributed under the License is distributed on an
// "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
// KIND, either express or implied.  See the License for the
// specific language governing permissions and limitations
// under the License.

const path = require('path')
const AntDesignThemePlugin = require('antd-theme-webpack-plugin')

function resolve (dir) {
  return path.join(__dirname, dir)
}

const options = {
  stylesDir: resolve('./src/style'),
  antDir: resolve('./node_modules/ant-design-vue'),
  varFile: resolve('./src/style/vars.less'),
  themeVariables: [
    '@layout-mode2',
    '@logo-background-color2',
    '@project-nav-background-color2',
    '@project-nav-text-color2',
    '@navigation-background-color2',
    '@navigation-text-color2',
    '@primary-color2',
    '@primary-color-light2',
    '@graph-normal-color2',
    '@graph-exception-color2',
    '@dashboard-tile-runningvms-bg2',
    '@dashboard-tile-stoppedvms-bg2',
    '@dashboard-tile-totalvms-bg2',
    '@dashboard-tile-totalvolumes-bg2',
    '@dashboard-tile-totalnetworks-bg2',
    '@dashboard-tile-totalips-bg2',
    '@link-color2',
    '@link-hover-color2',
    '@loading-color2',
    '@success-color2',
    '@warning-color2',
    '@processing-color2',
    '@error-color2',
    '@heading-color2',
    '@text-color2',
    '@text-color-secondary2',
    '@disabled-color2',
    '@border-color-base2',
    '@border-radius-base2',
    '@box-shadow-base2'
  ],
  lessUrl: 'js/less.min.js',
  indexFileName: 'index.html',
  publicPath: '.',
  generateOnce: false
}

const createThemeColorReplacerPlugin = () => new AntDesignThemePlugin(options)

module.exports = createThemeColorReplacerPlugin
