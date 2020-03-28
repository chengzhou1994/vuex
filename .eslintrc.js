module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ["plugin:vue/essential", "@vue/standard"],
  parserOptions: {
    parser: "babel-eslint"
  },
  rules: {
    /*
        0 或’off’：  关闭规则。
        1 或’warn’： 打开规则，并且作为一个警告，字体颜色为黄色（并不会导致检查不通过）。
        2 或’error’：打开规则，并且作为一个错误 ，色体颜色为红色(退出码为1，检查不通过)。
    */
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-console": 0, // 禁止使用console
    "no-unused-vars": "off",
    "vue/no-unused-vars": "off",
    "vue/no-parsing-error": "off",
    "vue/no-unused-components": "off",
    "vue/no-duplicate-attributes": "off",
    semi: [2, "always"], // 语句强制分号结尾
    "no-trailing-spaces": 0,
    "no-multi-spaces": 0, //不能用多余的空格
    "no-multiple-empty-lines": [1, { max: 2 }], //空行最多不能超过2行
    "padded-blocks": 0, //块语句内行首行尾是否要空行
    "space-before-function-paren": [0, "always"], //函数定义时括号前面要不要有空格
    "no-spaced-func": [0, "always"], //函数调用时函数名与()之间不能有空格
    "no-undef": 0, //不能有未定义的变量
    "no-lonely-if": 2, //禁止else语句内只有if语句
    quotes: [0, "single"], //引号类型 `` "" ''
    "quote-props": [0, "always"], //对象字面量中的属性名是否强制双引号
    "no-useless-return": "off",
    "vue/return-in-computed-property": "warn"
  }
};
