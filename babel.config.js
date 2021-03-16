/*
 * @Author: wangshengxian
 * @Date: 2020-12-30 00:18:07
 * @LastEditors: wangshengxian
 * @LastEditTime: 2020-12-30 00:52:21
 * @Desc:
 */
module.exports = {
  presets: ["@vue/cli-plugin-babel/preset"],
  plugins: [
    [
      'import',
      {
        libraryName: 'vant',
        libraryDirectory: 'es',
        style: true
      },
      'vant'
    ]
  ]
};
