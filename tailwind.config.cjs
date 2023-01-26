/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        black: {
          DEFAULT: '#141414',
          '50': '#C1C1C1',
          '100': '#B7B7B7',
          '200': '#A3A3A3',
          '300': '#8E8E8E',
          '400': '#7A7A7A',
          '500': '#666666',
          '600': '#515151',
          '700': '#3D3D3D',
          '800': '#282828',
          '900': '#141414'
        },
        secondaryblack: {
          DEFAULT: '#282828',
          '50': '#D5D5D5',
          '100': '#CBCBCB',
          '200': '#B7B7B7',
          '300': '#A2A2A2',
          '400': '#8E8E8E',
          '500': '#7A7A7A',
          '600': '#656565',
          '700': '#515151',
          '800': '#3C3C3C',
          '900': '#282828'
        },
        grey: {
          DEFAULT: '#b2b2b2',
          '50': '#F9F9F9',
          '100': '#EFEFEF',
          '200': '#DBDBDB',
          '300': '#C6C6C6',
          '400': '#B2B2B2',
          '500': '#969696',
          '600': '#7A7A7A',
          '700': '#5E5E5E',
          '800': '#424242',
          '900': '#262626'
        },
        secondarygrey: {
          DEFAULT: '#ececec',
          '50': '#F6F6F6',
          '100': '#ECECEC',
          '200': '#D0D0D0',
          '300': '#B4B4B4',
          '400': '#989898',
          '500': '#7C7C7C',
          '600': '#606060',
          '700': '#444444',
          '800': '#282828',
          '900': '#0C0C0C'
        },
        white: {
          DEFAULT: '#ffffff',
          '50': '#FFFFFF',
          '100': '#F1F1F1',
          '200': '#D5D5D5',
          '300': '#B9B9B9',
          '400': '#9D9D9D',
          '500': '#818181',
          '600': '#656565',
          '700': '#494949',
          '800': '#2D2D2D',
          '900': '#111111'
        },
        secondarywhite: {
          DEFAULT: '#f6f6f6',
          '50': '#FFFFFF',
          '100': '#F6F6F6',
          '200': '#DADADA',
          '300': '#BEBEBE',
          '400': '#A2A2A2',
          '500': '#868686',
          '600': '#6A6A6A',
          '700': '#4E4E4E',
          '800': '#323232',
          '900': '#161616'
        },
        primary: {
          DEFAULT: '#00a2c3',
          '50': '#A4F0FF',
          '100': '#90ECFF',
          '200': '#67E5FF',
          '300': '#3EDEFF',
          '400': '#16D8FF',
          '500': '#00C4EC',
          '600': '#00A2C3',
          '700': '#00738B',
          '800': '#004553',
          '900': '#00161B'
        },
        //reversed order
        primarylight: {
          DEFAULT: '#70e7ff',
          '50': '#00191E',
          '100': '#004856',
          '200': '#00778F',
          '300': '#00A5C7',
          '400': '#00D4FF',
          '500': '#38DEFF',
          '600': '#70E7FF',
          '700': '#99EEFF',
          '800': '#C2F5FF',
          '900': '#D6F8FF'
        },
        primarydark: {
          DEFAULT: '#004452',
          '50': '#85EAFF',
          '100': '#71E7FF',
          '200': '#48E0FF',
          '300': '#1FD9FF',
          '400': '#00CBF5',
          '500': '#00AACC',
          '600': '#0088A4',
          '700': '#00667B',
          '800': '#004452',
          '900': '#00151A'
        },
        secondary: {
          DEFAULT: '#49ccb8',
          '50': '#D8F4F0',
          '100': '#C8F0EA',
          '200': '#A9E7DD',
          '300': '#89DED1',
          '400': '#69D5C4',
          '500': '#49CCB8',
          '600': '#30AD9A',
          '700': '#248173',
          '800': '#18554C',
          '900': '#0C2925'
        },
        //reversed order
        secondarylight: {
          DEFAULT: '#90e0d4',
          '50': '#071916',
          '100': '#13443D',
          '200': '#1F7064',
          '300': '#2C9C8B',
          '400': '#38C8B2',
          '500': '#64D4C3',
          '600': '#90E0D4',
          '700': '#B0E9E0',
          '800': '#D0F2ED',
          '900': '#E0F6F3',
        },
        secondarydark: {
          DEFAULT: '#124039',
          '50': '#A0E4DA',
          '100': '#90E0D4',
          '200': '#70D7C7',
          '300': '#50CEBB',
          '400': '#36BFAA',
          '500': '#2DA08E',
          '600': '#248072',
          '700': '#1B6055',
          '800': '#124039',
          '900': '#061412'
        },
        tertiary: {
          DEFAULT: '#7571e1',
          '50': '#E8E7FA',
          '100': '#D7D6F6',
          '200': '#B6B4EF',
          '300': '#9693E8',
          '400': '#7571E1',
          '500': '#4843D7',
          '600': '#2D27BA',
          '700': '#221E8C',
          '800': '#16145E',
          '900': '#0B0A2F'
        },
        //reversed order
        tertiarylight: {
          DEFAULT: '#bfbbf2',
          '50': '#08061E',
          '100': '#130F4E',
          '200': '#1F187D',
          '300': '#2B21AC',
          '400': '#3A2ED7',
          '500': '#665DE0',
          '600': '#938CE9',
          '700': '#BFBBF2',
          '800': '#DFDDF9',
          '900': '#EFEEFC'
        },
        tertiarydark: {
          DEFAULT: '#141254',
          '50': '#ADABED',
          '100': '#9D9AE9',
          '200': '#7C79E2',
          '300': '#5B57DB',
          '400': '#3A35D4',
          '500': '#2C28B9',
          '600': '#242097',
          '700': '#1C1976',
          '800': '#141254',
          '900': '#090826'
        },
        accent: {
          DEFAULT: '#ee7744',
          '50': '#FAD6C7',
          '100': '#F8C9B4',
          '200': '#F5AD8F',
          '300': '#F19269',
          '400': '#EE7744',
          '500': '#E55315',
          '600': '#B24110',
          '700': '#7E2E0B',
          '800': '#4B1B07',
          '900': '#170902'
        },
        //reversed order
        accentlight: {
          DEFAULT: '#f49f7b',
          '50': '#1C0A02',
          '100': '#501C07',
          '200': '#842F0B',
          '300': '#B7410F',
          '400': '#EB5414',
          '500': '#F07947',
          '600': '#F49F7B',
          '700': '#F7BAA1',
          '800': '#FAD6C6',
          '900': '#FCE3D9'
        },
        accentdark: {
          DEFAULT: '#5d2209',
          '50': '#F6BBA2',
          '100': '#F4AD8F',
          '200': '#F1926A',
          '300': '#ED7745',
          '400': '#E95C20',
          '500': '#CD4B14',
          '600': '#A73D10',
          '700': '#82300D',
          '800': '#5D2209',
          '900': '#2A0F04'
        },
        emerald: {
          DEFAULT: '#49cc73',
          '50': '#D8F4E1',
          '100': '#C8F0D5',
          '200': '#A9E7BD',
          '300': '#89DEA4',
          '400': '#69D58C',
          '500': '#49CC73',
          '600': '#30AD58',
          '700': '#248142',
          '800': '#18552B',
          '900': '#0C2915'
        },
        //reversed order
        emeraldlight: {
          DEFAULT: '#90e0a9',
          '50': '#07190C',
          '100': '#134423',
          '200': '#1F7039',
          '300': '#2C9C4F',
          '400': '#38C865',
          '500': '#64D487',
          '600': '#90E0A9',
          '700': '#B0E9C2',
          '800': '#D0F2DA',
          '900': '#E0F6E7',
        },
        emeralddark: {
          DEFAULT: '#124020',
          '50': '#A0E4B5',
          '100': '#90E0A8',
          '200': '#70D78F',
          '300': '#50CE76',
          '400': '#36BF60',
          '500': '#2DA050',
          '600': '#248040',
          '700': '#1B6030',
          '800': '#124020',
          '900': '#06140A'
        },
        mauve: {
          DEFAULT: '#c870e0',
          '50': '#F5E5F9',
          '100': '#EFD5F6',
          '200': '#E2B3EF',
          '300': '#D592E7',
          '400': '#C870E0',
          '500': '#B642D6',
          '600': '#9928B8',
          '700': '#731E8A',
          '800': '#4C145C',
          '900': '#260A2E'
        },
        //reversed order
        mauvelight: {
          DEFAULT: '#d79aea',
          '50': '#23092B',
          '100': '#481359',
          '200': '#6E1C87',
          '300': '#9426B6',
          '400': '#B23DD7',
          '500': '#C56CE0',
          '600': '#D79AEA',
          '700': '#E4BCF1',
          '800': '#F2DEF8',
          '900': '#F8EEFC',
        },
        mauvedark: {
          DEFAULT: '#370e43',
          '50': '#D899EA',
          '100': '#D188E6',
          '200': '#C467DF',
          '300': '#B745D8',
          '400': '#A62ACA',
          '500': '#8A23A8',
          '600': '#6E1C86',
          '700': '#531565',
          '800': '#370E43',
          '900': '#110415'
        },
        red: {
          DEFAULT: '#ed684f',
          '50': '#FAD7D1',
          '100': '#F8C7BE',
          '200': '#F5A899',
          '300': '#F18874',
          '400': '#ED684F',
          '500': '#E83C1C',
          '600': '#B92D13',
          '700': '#86210E',
          '800': '#531408',
          '900': '#200803'
        },
        //reversed order
        redlight: {
          DEFAULT: '#f4a096',
          '50': '#340A05',
          '100': '#67150B',
          '200': '#9A1F10',
          '300': '#CC2915',
          '400': '#E94430',
          '500': '#EF7263',
          '600': '#F4A096',
          '700': '#F8C1BB',
          '800': '#FCE3E0',
          '900': '#FEF4F2',
        },
        reddark: {
          DEFAULT: '#5e1c12',
          '50': '#F0BAB2',
          '100': '#EDABA1',
          '200': '#E68C7E',
          '300': '#E06D5C',
          '400': '#D94F3A',
          '500': '#C53B26',
          '600': '#A2301F',
          '700': '#802619',
          '800': '#5E1C12',
          '900': '#2F0E09'
        }
      },
      fontFamily: {
        'sans': ['Montserrat','Inter var', 'SF Compact', ...defaultTheme.fontFamily.sans]
      },
      boxShadow: {
        'center-sm': '0 0 2px 0 #00000050)',
        'center': '0 0 3px 0 rgb(0 0 0 / 0.1), 0 0 2px -1px #00000050',
        'center-md': '0 0 6px -1px rgb(0 0 0 / 0.1), 0 0 4px -2px #00000090',
        'center-lg': '0 0 15px -3px rgb(0 0 0 / 0.1), 0 0 6px -4px #00000090',
        'center-xl': '0 0 25px -5px rgb(0 0 0 / 0.1), 0 0 10px -6px #00000050',
        'center-2xl': '0 0 50px -12px #00000050',
      }
    },
  },
  plugins: [],
};
