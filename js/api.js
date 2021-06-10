/* exported requests, trendingTickers */

var trendingTickers = {
  finance: {
    result: [
      {
        count: 20,
        quotes: [
          {
            language: 'en-US',
            region: 'US',
            quoteType: 'EQUITY',
            triggerable: true,
            quoteSourceName: 'Delayed Quote',
            exchange: 'NMS',
            market: 'us_market',
            sourceInterval: 15,
            exchangeTimezoneName: 'America/New_York',
            exchangeTimezoneShortName: 'EDT',
            gmtOffSetMilliseconds: -14400000,
            esgPopulated: false,
            tradeable: false,
            exchangeDataDelayedBy: 0,
            regularMarketPrice: 11.63,
            regularMarketTime: 1623182403,
            regularMarketChange: 3.87,
            marketState: 'POST',
            shortName: 'ContextLogic Inc.',
            priceHint: 2,
            regularMarketChangePercent: 49.87113,
            regularMarketPreviousClose: 7.76,
            fullExchangeName: 'NasdaqGS',
            longName: 'ContextLogic Inc.',
            symbol: 'WISH'
          },
          {
            language: 'en-US',
            region: 'US',
            quoteType: 'EQUITY',
            triggerable: true,
            quoteSourceName: 'Delayed Quote',
            exchange: 'NMS',
            market: 'us_market',
            sourceInterval: 15,
            exchangeTimezoneName: 'America/New_York',
            exchangeTimezoneShortName: 'EDT',
            gmtOffSetMilliseconds: -14400000,
            esgPopulated: false,
            tradeable: false,
            exchangeDataDelayedBy: 0,
            regularMarketPrice: 28.87,
            regularMarketTime: 1623182402,
            regularMarketChange: 5.9300003,
            marketState: 'POST',
            shortName: "Wendy's Company (The)",
            priceHint: 2,
            regularMarketChangePercent: 25.850046,
            regularMarketPreviousClose: 22.94,
            fullExchangeName: 'NasdaqGS',
            longName: "The Wendy's Company",
            symbol: 'WEN'
          },
          {
            language: 'en-US',
            region: 'US',
            quoteType: 'EQUITY',
            triggerable: true,
            quoteSourceName: 'Delayed Quote',
            exchange: 'NMS',
            market: 'us_market',
            sourceInterval: 15,
            exchangeTimezoneName: 'America/New_York',
            exchangeTimezoneShortName: 'EDT',
            gmtOffSetMilliseconds: -14400000,
            esgPopulated: false,
            tradeable: false,
            exchangeDataDelayedBy: 0,
            regularMarketPrice: 11.22,
            regularMarketTime: 1623182402,
            regularMarketChange: -2.1799994,
            marketState: 'POST',
            shortName: 'Lordstown Motors Corp.',
            priceHint: 2,
            regularMarketChangePercent: -16.268652,
            regularMarketPreviousClose: 13.4,
            fullExchangeName: 'NasdaqGS',
            longName: 'Lordstown Motors Corp.',
            symbol: 'RIDE'
          },
          {
            language: 'en-US',
            region: 'US',
            quoteType: 'EQUITY',
            triggerable: true,
            quoteSourceName: 'Delayed Quote',
            exchange: 'NMS',
            market: 'us_market',
            sourceInterval: 15,
            exchangeTimezoneName: 'America/New_York',
            exchangeTimezoneShortName: 'EDT',
            gmtOffSetMilliseconds: -14400000,
            esgPopulated: false,
            tradeable: false,
            exchangeDataDelayedBy: 0,
            regularMarketPrice: 22.15,
            regularMarketTime: 1623182403,
            regularMarketChange: 10.23,
            marketState: 'POST',
            shortName: 'Clover Health Investments, Corp',
            priceHint: 2,
            regularMarketChangePercent: 85.82214,
            regularMarketPreviousClose: 11.92,
            fullExchangeName: 'NasdaqGS',
            longName: 'Clover Health Investments, Corp.',
            symbol: 'CLOV'
          },
          {
            language: 'en-US',
            region: 'US',
            quoteType: 'EQUITY',
            triggerable: true,
            quoteSourceName: 'Delayed Quote',
            exchange: 'NMS',
            market: 'us_market',
            sourceInterval: 15,
            exchangeTimezoneName: 'America/New_York',
            exchangeTimezoneShortName: 'EDT',
            gmtOffSetMilliseconds: -14400000,
            esgPopulated: false,
            tradeable: false,
            exchangeDataDelayedBy: 0,
            regularMarketPrice: 10.71,
            regularMarketTime: 1623182403,
            regularMarketChange: 1.8100004,
            marketState: 'POST',
            shortName: 'Canoo Inc.',
            priceHint: 2,
            regularMarketChangePercent: 20.337084,
            regularMarketPreviousClose: 8.9,
            fullExchangeName: 'NasdaqGS',
            longName: 'Canoo Inc.',
            symbol: 'GOEV'
          },
          {
            language: 'en-US',
            region: 'US',
            quoteType: 'EQUITY',
            triggerable: true,
            quoteSourceName: 'Delayed Quote',
            exchange: 'NYQ',
            market: 'us_market',
            sourceInterval: 15,
            exchangeTimezoneName: 'America/New_York',
            exchangeTimezoneShortName: 'EDT',
            gmtOffSetMilliseconds: -14400000,
            esgPopulated: false,
            tradeable: false,
            exchangeDataDelayedBy: 0,
            regularMarketPrice: 6.27,
            regularMarketTime: 1623182401,
            regularMarketChange: 1.05,
            marketState: 'POST',
            shortName: 'Ashford Hospitality Trust Inc',
            priceHint: 2,
            regularMarketChangePercent: 20.1149,
            regularMarketPreviousClose: 5.22,
            fullExchangeName: 'NYSE',
            longName: 'Ashford Hospitality Trust, Inc.',
            symbol: 'AHT'
          },
          {
            language: 'en-US',
            region: 'US',
            quoteType: 'EQUITY',
            triggerable: true,
            quoteSourceName: 'Delayed Quote',
            exchange: 'NMS',
            market: 'us_market',
            sourceInterval: 15,
            exchangeTimezoneName: 'America/New_York',
            exchangeTimezoneShortName: 'EDT',
            gmtOffSetMilliseconds: -14400000,
            esgPopulated: false,
            tradeable: false,
            exchangeDataDelayedBy: 0,
            regularMarketPrice: 9.9,
            regularMarketTime: 1623182402,
            regularMarketChange: -0.46000004,
            marketState: 'POST',
            shortName: 'Clean Energy Fuels Corp.',
            priceHint: 2,
            regularMarketChangePercent: -4.440155,
            regularMarketPreviousClose: 10.36,
            fullExchangeName: 'NasdaqGS',
            longName: 'Clean Energy Fuels Corp.',
            symbol: 'CLNE'
          },
          {
            language: 'en-US',
            region: 'US',
            quoteType: 'EQUITY',
            triggerable: true,
            quoteSourceName: 'Delayed Quote',
            exchange: 'NMS',
            market: 'us_market',
            sourceInterval: 15,
            exchangeTimezoneName: 'America/New_York',
            exchangeTimezoneShortName: 'EDT',
            gmtOffSetMilliseconds: -14400000,
            esgPopulated: false,
            tradeable: false,
            exchangeDataDelayedBy: 0,
            regularMarketPrice: 23.89,
            regularMarketTime: 1623182402,
            regularMarketChange: 2.6800003,
            marketState: 'POST',
            shortName: 'SoFi Technologies, Inc.',
            priceHint: 2,
            regularMarketChangePercent: 12.635551,
            regularMarketPreviousClose: 21.21,
            fullExchangeName: 'NasdaqGS',
            longName: 'SoFi Technologies, Inc.',
            symbol: 'SOFI'
          },
          {
            language: 'en-US',
            region: 'US',
            quoteType: 'EQUITY',
            triggerable: true,
            quoteSourceName: 'Delayed Quote',
            exchange: 'NYQ',
            market: 'us_market',
            sourceInterval: 15,
            exchangeTimezoneName: 'America/New_York',
            exchangeTimezoneShortName: 'EDT',
            gmtOffSetMilliseconds: -14400000,
            esgPopulated: false,
            tradeable: false,
            exchangeDataDelayedBy: 0,
            regularMarketPrice: 21.31,
            regularMarketTime: 1623182402,
            regularMarketChange: 1.41,
            marketState: 'POST',
            shortName: 'Rocket Companies, Inc.',
            priceHint: 2,
            regularMarketChangePercent: 7.08543,
            regularMarketPreviousClose: 19.9,
            fullExchangeName: 'NYSE',
            longName: 'Rocket Companies, Inc.',
            symbol: 'RKT'
          },
          {
            language: 'en-US',
            region: 'US',
            quoteType: 'EQUITY',
            triggerable: true,
            quoteSourceName: 'Delayed Quote',
            exchange: 'NMS',
            market: 'us_market',
            sourceInterval: 15,
            exchangeTimezoneName: 'America/New_York',
            exchangeTimezoneShortName: 'EDT',
            gmtOffSetMilliseconds: -14400000,
            esgPopulated: false,
            tradeable: false,
            exchangeDataDelayedBy: 0,
            regularMarketPrice: 12.14,
            regularMarketTime: 1623182403,
            regularMarketChange: 4.12,
            marketState: 'POST',
            shortName: 'AST SpaceMobile, Inc.',
            priceHint: 2,
            regularMarketChangePercent: 51.371567,
            regularMarketPreviousClose: 8.02,
            fullExchangeName: 'NasdaqGS',
            longName: 'AST SpaceMobile, Inc.',
            symbol: 'ASTS'
          },
          {
            language: 'en-US',
            region: 'US',
            quoteType: 'EQUITY',
            triggerable: true,
            quoteSourceName: 'Delayed Quote',
            exchange: 'NYQ',
            market: 'us_market',
            sourceInterval: 15,
            exchangeTimezoneName: 'America/New_York',
            exchangeTimezoneShortName: 'EDT',
            gmtOffSetMilliseconds: -14400000,
            esgPopulated: false,
            tradeable: false,
            exchangeDataDelayedBy: 0,
            regularMarketPrice: 11.05,
            regularMarketTime: 1623182402,
            regularMarketChange: 2.38,
            marketState: 'POST',
            shortName: 'Eastman Kodak Company',
            priceHint: 2,
            regularMarketChangePercent: 27.451,
            regularMarketPreviousClose: 8.67,
            fullExchangeName: 'NYSE',
            longName: 'Eastman Kodak Company',
            symbol: 'KODK'
          },
          {
            language: 'en-US',
            region: 'US',
            quoteType: 'EQUITY',
            triggerable: true,
            quoteSourceName: 'Delayed Quote',
            exchange: 'NYQ',
            market: 'us_market',
            sourceInterval: 15,
            exchangeTimezoneName: 'America/New_York',
            exchangeTimezoneShortName: 'EDT',
            gmtOffSetMilliseconds: -14400000,
            esgPopulated: false,
            tradeable: false,
            exchangeDataDelayedBy: 0,
            regularMarketPrice: 56.2,
            regularMarketTime: 1623182402,
            regularMarketChange: 5.5,
            marketState: 'POST',
            shortName: 'Fastly, Inc.',
            priceHint: 2,
            regularMarketChangePercent: 10.8481,
            regularMarketPreviousClose: 50.7,
            fullExchangeName: 'NYSE',
            longName: 'Fastly, Inc.',
            symbol: 'FSLY'
          },
          {
            language: 'en-US',
            region: 'US',
            quoteType: 'EQUITY',
            triggerable: true,
            quoteSourceName: 'Delayed Quote',
            exchange: 'ASE',
            market: 'us_market',
            sourceInterval: 15,
            exchangeTimezoneName: 'America/New_York',
            exchangeTimezoneShortName: 'EDT',
            gmtOffSetMilliseconds: -14400000,
            esgPopulated: false,
            tradeable: false,
            exchangeDataDelayedBy: 0,
            regularMarketPrice: 3.43,
            regularMarketTime: 1623182400,
            regularMarketChange: 0.45,
            marketState: 'POST',
            shortName: 'Senseonics Holdings, Inc.',
            priceHint: 4,
            regularMarketChangePercent: 15.1007,
            regularMarketPreviousClose: 2.98,
            fullExchangeName: 'NYSE American',
            longName: 'Senseonics Holdings, Inc.',
            symbol: 'SENS'
          },
          {
            language: 'en-US',
            region: 'US',
            quoteType: 'EQUITY',
            triggerable: true,
            quoteSourceName: 'Delayed Quote',
            exchange: 'NMS',
            market: 'us_market',
            sourceInterval: 15,
            exchangeTimezoneName: 'America/New_York',
            exchangeTimezoneShortName: 'EDT',
            gmtOffSetMilliseconds: -14400000,
            esgPopulated: false,
            tradeable: false,
            exchangeDataDelayedBy: 0,
            regularMarketPrice: 7.09,
            regularMarketTime: 1623182402,
            regularMarketChange: 1.5799999,
            marketState: 'POST',
            shortName: 'CarLotz, Inc.',
            priceHint: 2,
            regularMarketChangePercent: 28.675133,
            regularMarketPreviousClose: 5.51,
            fullExchangeName: 'NasdaqGS',
            longName: 'CarLotz, Inc.',
            symbol: 'LOTZ'
          },
          {
            language: 'en-US',
            region: 'US',
            quoteType: 'EQUITY',
            triggerable: true,
            quoteSourceName: 'Delayed Quote',
            exchange: 'NYQ',
            market: 'us_market',
            sourceInterval: 15,
            exchangeTimezoneName: 'America/New_York',
            exchangeTimezoneShortName: 'EDT',
            gmtOffSetMilliseconds: -14400000,
            esgPopulated: false,
            tradeable: false,
            exchangeDataDelayedBy: 0,
            regularMarketPrice: 76,
            regularMarketTime: 1623182402,
            regularMarketChange: 2.12,
            marketState: 'POST',
            shortName: 'UiPath, Inc.',
            priceHint: 2,
            regularMarketChangePercent: 2.86952,
            regularMarketPreviousClose: 73.88,
            fullExchangeName: 'NYSE',
            longName: 'UiPath Inc.',
            symbol: 'PATH'
          },
          {
            language: 'en-US',
            region: 'US',
            quoteType: 'EQUITY',
            triggerable: true,
            quoteSourceName: 'Delayed Quote',
            exchange: 'NMS',
            market: 'us_market',
            sourceInterval: 15,
            exchangeTimezoneName: 'America/New_York',
            exchangeTimezoneShortName: 'EDT',
            gmtOffSetMilliseconds: -14400000,
            esgPopulated: false,
            tradeable: false,
            exchangeDataDelayedBy: 0,
            regularMarketPrice: 12.25,
            regularMarketTime: 1623182403,
            regularMarketChange: 2.12,
            marketState: 'POST',
            shortName: 'Velodyne Lidar, Inc.',
            priceHint: 2,
            regularMarketChangePercent: 20.927937,
            regularMarketPreviousClose: 10.13,
            fullExchangeName: 'NasdaqGS',
            longName: 'Velodyne Lidar, Inc.',
            symbol: 'VLDR'
          },
          {
            language: 'en-US',
            region: 'US',
            quoteType: 'EQUITY',
            triggerable: true,
            quoteSourceName: 'Delayed Quote',
            exchange: 'NMS',
            market: 'us_market',
            sourceInterval: 15,
            exchangeTimezoneName: 'America/New_York',
            exchangeTimezoneShortName: 'EDT',
            gmtOffSetMilliseconds: -14400000,
            esgPopulated: false,
            tradeable: false,
            exchangeDataDelayedBy: 0,
            regularMarketPrice: 11.31,
            regularMarketTime: 1623182403,
            regularMarketChange: 1.5100002,
            marketState: 'POST',
            shortName: 'Root, Inc.',
            priceHint: 2,
            regularMarketChangePercent: 15.408166,
            regularMarketPreviousClose: 9.8,
            fullExchangeName: 'NasdaqGS',
            longName: 'Root, Inc.',
            symbol: 'ROOT'
          },
          {
            language: 'en-US',
            region: 'US',
            quoteType: 'EQUITY',
            triggerable: true,
            quoteSourceName: 'Delayed Quote',
            exchange: 'NYQ',
            market: 'us_market',
            sourceInterval: 15,
            exchangeTimezoneName: 'America/New_York',
            exchangeTimezoneShortName: 'EDT',
            gmtOffSetMilliseconds: -14400000,
            esgPopulated: false,
            tradeable: false,
            exchangeDataDelayedBy: 0,
            regularMarketPrice: 95.36,
            regularMarketTime: 1623182402,
            regularMarketChange: 2.79,
            marketState: 'POST',
            shortName: 'Biohaven Pharmaceutical Holding',
            priceHint: 2,
            regularMarketChangePercent: 3.01394,
            regularMarketPreviousClose: 92.57,
            fullExchangeName: 'NYSE',
            longName: 'Biohaven Pharmaceutical Holding Company Ltd.',
            symbol: 'BHVN'
          },
          {
            language: 'en-US',
            region: 'US',
            quoteType: 'EQUITY',
            triggerable: true,
            quoteSourceName: 'Delayed Quote',
            exchange: 'NMS',
            market: 'us_market',
            sourceInterval: 15,
            exchangeTimezoneName: 'America/New_York',
            exchangeTimezoneShortName: 'EDT',
            gmtOffSetMilliseconds: -14400000,
            esgPopulated: false,
            tradeable: false,
            exchangeDataDelayedBy: 0,
            regularMarketPrice: 2.21,
            regularMarketTime: 1623182402,
            regularMarketChange: 0.00999999,
            marketState: 'POST',
            shortName: 'Aethlon Medical, Inc.',
            priceHint: 4,
            regularMarketChangePercent: 0.45454502,
            regularMarketPreviousClose: 2.2,
            fullExchangeName: 'NasdaqGS',
            longName: 'Aethlon Medical, Inc.',
            symbol: 'AEMD'
          },
          {
            language: 'en-US',
            region: 'US',
            quoteType: 'EQUITY',
            triggerable: true,
            quoteSourceName: 'Delayed Quote',
            exchange: 'NMS',
            market: 'us_market',
            sourceInterval: 15,
            exchangeTimezoneName: 'America/New_York',
            exchangeTimezoneShortName: 'EDT',
            gmtOffSetMilliseconds: -14400000,
            esgPopulated: false,
            tradeable: false,
            exchangeDataDelayedBy: 0,
            regularMarketPrice: 0.5958,
            regularMarketTime: 1623182403,
            regularMarketChange: 0.09289998,
            marketState: 'POST',
            shortName: 'Farmmi, Inc. Ordinary Shares',
            priceHint: 4,
            regularMarketChangePercent: 18.472853,
            regularMarketPreviousClose: 0.5029,
            fullExchangeName: 'NasdaqGS',
            longName: 'Farmmi, Inc.',
            symbol: 'FAMI'
          }
        ],
        jobTimestamp: 1623194016296,
        startInterval: 202106082200
      }
    ],
    error: null
  }
};

var requests = {
  GME: {
    financialsTemplate: {
      code: 'N',
      maxAge: 1
    },
    price: {
      quoteSourceName: 'Nasdaq Real Time Price',
      regularMarketOpen: {
        raw: 292,
        fmt: '292.00'
      },
      averageDailyVolume3Month: {
        raw: 13524203,
        fmt: '13.52M',
        longFmt: '13,524,203'
      },
      exchange: 'NYQ',
      regularMarketTime: 1623182402,
      volume24Hr: {},
      regularMarketDayHigh: {
        raw: 344.66,
        fmt: '344.66'
      },
      shortName: 'GameStop Corporation',
      averageDailyVolume10Day: {
        raw: 8659100,
        fmt: '8.66M',
        longFmt: '8,659,100'
      },
      longName: 'GameStop Corp.',
      regularMarketChange: {
        raw: 19.99,
        fmt: '19.99'
      },
      currencySymbol: '$',
      regularMarketPreviousClose: {
        raw: 280.01,
        fmt: '280.01'
      },
      postMarketTime: 1623191532,
      preMarketPrice: {
        raw: 292.25,
        fmt: '292.25'
      },
      preMarketTime: 1623158999,
      exchangeDataDelayedBy: 0,
      toCurrency: null,
      postMarketChange: {
        raw: 4,
        fmt: '4.00'
      },
      postMarketPrice: {
        raw: 304,
        fmt: '304.00'
      },
      exchangeName: 'NYSE',
      preMarketChange: {
        raw: 12.24,
        fmt: '12.24'
      },
      circulatingSupply: {},
      regularMarketDayLow: {
        raw: 281,
        fmt: '281.00'
      },
      priceHint: {
        raw: 2,
        fmt: '2',
        longFmt: '2'
      },
      currency: 'USD',
      regularMarketPrice: {
        raw: 300,
        fmt: '300.00'
      },
      regularMarketVolume: {
        raw: 17347629,
        fmt: '17.35M',
        longFmt: '17,347,629.00'
      },
      lastMarket: null,
      regularMarketSource: 'FREE_REALTIME',
      openInterest: {},
      marketState: 'POST',
      underlyingSymbol: null,
      marketCap: {
        raw: 21231540224,
        fmt: '21.23B',
        longFmt: '21,231,540,224.00'
      },
      quoteType: 'EQUITY',
      preMarketChangePercent: {
        raw: 0.0437127,
        fmt: '4.37%'
      },
      volumeAllCurrencies: {},
      postMarketSource: 'FREE_REALTIME',
      strikePrice: {},
      symbol: 'GME',
      postMarketChangePercent: {
        raw: 0.013333334,
        fmt: '1.33%'
      },
      preMarketSource: 'FREE_REALTIME',
      maxAge: 1,
      fromCurrency: null,
      regularMarketChangePercent: {
        raw: 0.0713903,
        fmt: '7.14%'
      }
    },
    secFilings: {
      filings: [
        {
          date: '2021-04-30',
          epochDate: 1619817858,
          type: '8-K',
          title: 'Change in Directors or Principal Officers, Financial Statements and Exhibits',
          edgarUrl: 'https://yahoo.brand.edgar-online.com/DisplayFiling.aspx?TabIndex=2&dcn=0001326380-21-000052&nav=1&src=Yahoo',
          maxAge: 1
        },
        {
          date: '2021-04-19',
          epochDate: 1618831483,
          type: '8-K',
          title: 'Change in Directors or Principal Officers, Regulation FD Disclosure, Financial Statements and Exhibits',
          edgarUrl: 'https://yahoo.brand.edgar-online.com/DisplayFiling.aspx?TabIndex=2&dcn=0001193125-21-120304&nav=1&src=Yahoo',
          maxAge: 1
        },
        {
          date: '2021-04-13',
          epochDate: 1618348605,
          type: '8-K',
          title: 'Termination of a Material Definitive Agreement, Triggering Events That Accelerate or Increase a Direct Financial Obligation or an Obligation under an Off-Balance Sheet Arrangement, Regulation FD Disclosure, Financial Statements and Exhibits',
          edgarUrl: 'https://yahoo.brand.edgar-online.com/DisplayFiling.aspx?TabIndex=2&dcn=0001193125-21-114706&nav=1&src=Yahoo',
          maxAge: 1
        },
        {
          date: '2021-04-08',
          epochDate: 1617883817,
          type: '8-K',
          title: 'Change in Directors or Principal Officers, Regulation FD Disclosure, Financial Statements and Exhibits',
          edgarUrl: 'https://yahoo.brand.edgar-online.com/DisplayFiling.aspx?TabIndex=2&dcn=0001193125-21-109530&nav=1&src=Yahoo',
          maxAge: 1
        },
        {
          date: '2021-04-05',
          epochDate: 1617621098,
          type: '8-K',
          title: 'Regulation FD Disclosure, Other Events, Financial Statements and Exhibits',
          edgarUrl: 'https://yahoo.brand.edgar-online.com/DisplayFiling.aspx?TabIndex=2&dcn=0001193125-21-105534&nav=1&src=Yahoo',
          maxAge: 1
        },
        {
          date: '2021-04-01',
          epochDate: 1617314863,
          type: '8-K',
          title: 'Change in Directors or Principal Officers',
          edgarUrl: 'https://yahoo.brand.edgar-online.com/DisplayFiling.aspx?TabIndex=2&dcn=0001326380-21-000035&nav=1&src=Yahoo',
          maxAge: 1
        },
        {
          date: '2021-03-23',
          epochDate: 1616535642,
          type: '10-K',
          title: 'Annual Report',
          edgarUrl: 'https://yahoo.brand.edgar-online.com/DisplayFiling.aspx?TabIndex=2&dcn=0001326380-21-000032&nav=1&src=Yahoo',
          maxAge: 1
        },
        {
          date: '2021-03-23',
          epochDate: 1616535036,
          type: '8-K',
          title: 'Results of Operations and Financial Condition, Change in Directors or Principal Officers, Regulation FD Disclosure',
          edgarUrl: 'https://yahoo.brand.edgar-online.com/DisplayFiling.aspx?TabIndex=2&dcn=0001326380-21-000030&nav=1&src=Yahoo',
          maxAge: 1
        },
        {
          date: '2021-03-23',
          epochDate: 1616500661,
          type: '8-K',
          title: 'Change in Directors or Principal Officers, Financial Statements and Exhibits',
          edgarUrl: 'https://yahoo.brand.edgar-online.com/DisplayFiling.aspx?TabIndex=2&dcn=0001193125-21-090320&nav=1&src=Yahoo',
          maxAge: 1
        },
        {
          date: '2021-02-23',
          epochDate: 1614116436,
          type: '8-K',
          title: 'Change in Directors or Principal Officers, Regulation FD Disclosure, Financial Statements and Exhibits',
          edgarUrl: 'https://yahoo.brand.edgar-online.com/DisplayFiling.aspx?TabIndex=2&dcn=0001326380-21-000024&nav=1&src=Yahoo',
          maxAge: 1
        },
        {
          date: '2021-01-11',
          epochDate: 1610372072,
          type: '8-K',
          title: 'Regulation FD Disclosure, Financial Statements and Exhibits',
          edgarUrl: 'https://yahoo.brand.edgar-online.com/DisplayFiling.aspx?TabIndex=2&dcn=0001326380-21-000008&nav=1&src=Yahoo',
          maxAge: 1
        },
        {
          date: '2021-01-11',
          epochDate: 1610368454,
          type: '8-K',
          title: 'Entry into a Material Definitive Agreement, Change in Directors or Principal Officers, Regulation FD Disclosure, Financial Statements and Exhibits',
          edgarUrl: 'https://yahoo.brand.edgar-online.com/DisplayFiling.aspx?TabIndex=2&dcn=0001326380-21-000006&nav=1&src=Yahoo',
          maxAge: 1
        },
        {
          date: '2020-12-08',
          epochDate: 1607463899,
          type: '8-K',
          title: 'Entry into a Material Definitive Agreement, Financial Statements and Exhibits',
          edgarUrl: 'https://yahoo.brand.edgar-online.com/DisplayFiling.aspx?TabIndex=2&dcn=0001193125-20-312809&nav=1&src=Yahoo',
          maxAge: 1
        },
        {
          date: '2020-12-08',
          epochDate: 1607462007,
          type: '10-Q',
          title: 'Quarterly Report',
          edgarUrl: 'https://yahoo.brand.edgar-online.com/DisplayFiling.aspx?TabIndex=2&dcn=0001326380-20-000134&nav=1&src=Yahoo',
          maxAge: 1
        },
        {
          date: '2020-12-08',
          epochDate: 1607461785,
          type: '8-K',
          title: 'Results of Operations and Financial Condition',
          edgarUrl: 'https://yahoo.brand.edgar-online.com/DisplayFiling.aspx?TabIndex=2&dcn=0001326380-20-000132&nav=1&src=Yahoo',
          maxAge: 1
        },
        {
          date: '2020-11-10',
          epochDate: 1605042838,
          type: '8-K',
          title: 'Triggering Events That Accelerate or Increase a Direct Financial Obligation or an Obligation under an Off-Balance Sheet Arrangement',
          edgarUrl: 'https://yahoo.brand.edgar-online.com/DisplayFiling.aspx?TabIndex=2&dcn=0001326380-20-000126&nav=1&src=Yahoo',
          maxAge: 1
        },
        {
          date: '2020-09-09',
          epochDate: 1599687172,
          type: '10-Q',
          title: 'Quarterly Report',
          edgarUrl: 'https://yahoo.brand.edgar-online.com/DisplayFiling.aspx?TabIndex=2&dcn=0001326380-20-000119&nav=1&src=Yahoo',
          maxAge: 1
        },
        {
          date: '2020-09-09',
          epochDate: 1599686091,
          type: '8-K',
          title: 'Results of Operations and Financial Condition',
          edgarUrl: 'https://yahoo.brand.edgar-online.com/DisplayFiling.aspx?TabIndex=2&dcn=0001326380-20-000116&nav=1&src=Yahoo',
          maxAge: 1
        },
        {
          date: '2020-09-02',
          epochDate: 1599082728,
          type: '8-K',
          title: 'Entry into a Material Definitive Agreement, Creation of a Direct Financial Obligation or an Obligation under an Off-Balance Sheet Arrangement of a Registrant, Financial Statements and Exhibits',
          edgarUrl: 'https://yahoo.brand.edgar-online.com/DisplayFiling.aspx?TabIndex=2&dcn=0001326380-20-000107&nav=1&src=Yahoo',
          maxAge: 1
        },
        {
          date: '2020-07-06',
          epochDate: 1594074567,
          type: '8-K',
          title: 'Entry into a Material Definitive Agreement, Creation of a Direct Financial Obligation or an Obligation under an Off-Balance Sheet Arrangement of a Registrant, Other Events, Financial Statements and Exhibits',
          edgarUrl: 'https://yahoo.brand.edgar-online.com/DisplayFiling.aspx?TabIndex=2&dcn=0001193125-20-187950&nav=1&src=Yahoo',
          maxAge: 1
        },
        {
          date: '2020-07-02',
          epochDate: 1593725848,
          type: '8-K',
          title: 'Change in Directors or Principal Officers, Financial Statements and Exhibits',
          edgarUrl: 'https://yahoo.brand.edgar-online.com/DisplayFiling.aspx?TabIndex=2&dcn=0001193125-20-186820&nav=1&src=Yahoo',
          maxAge: 1
        },
        {
          date: '2020-06-18',
          epochDate: 1592514818,
          type: '8-K',
          title: 'Submission of Matters to a Vote of Security Holders',
          edgarUrl: 'https://yahoo.brand.edgar-online.com/DisplayFiling.aspx?TabIndex=2&dcn=0001326380-20-000087&nav=1&src=Yahoo',
          maxAge: 1
        },
        {
          date: '2020-06-18',
          epochDate: 1592487108,
          type: '8-K',
          title: 'Other Events, Financial Statements and Exhibits',
          edgarUrl: 'https://yahoo.brand.edgar-online.com/DisplayFiling.aspx?TabIndex=2&dcn=0001193125-20-171922&nav=1&src=Yahoo',
          maxAge: 1
        },
        {
          date: '2020-06-05',
          epochDate: 1591351294,
          type: '8-K',
          title: 'Disclosing Results of Operations and Financial Condition, Regulation FD Disclosure, Other Eve',
          edgarUrl: 'https://yahoo.brand.edgar-online.com/DisplayFiling.aspx?TabIndex=2&dcn=0001193125-20-160944&nav=1&src=Yahoo',
          maxAge: 1
        },
        {
          date: '2020-06-04',
          epochDate: 1591302005,
          type: '8-K',
          title: 'Disclosing Change in Directors or Principal Officers, Financial Statements and Exhibits',
          edgarUrl: 'https://yahoo.brand.edgar-online.com/DisplayFiling.aspx?TabIndex=2&dcn=0001326380-20-000051&nav=1&src=Yahoo',
          maxAge: 1
        },
        {
          date: '2020-05-19',
          epochDate: 1589883548,
          type: '8-K',
          title: 'Disclosing Change in Directors or Principal Officers',
          edgarUrl: 'https://yahoo.brand.edgar-online.com/DisplayFiling.aspx?TabIndex=2&dcn=0001326380-20-000047&nav=1&src=Yahoo',
          maxAge: 1
        },
        {
          date: '2020-04-21',
          epochDate: 1587499790,
          type: '8-K',
          title: 'Disclosing Change in Directors or Principal Officers, Regulation FD Disclosure, Financial Sta',
          edgarUrl: 'https://yahoo.brand.edgar-online.com/DisplayFiling.aspx?TabIndex=2&dcn=0001326380-20-000037&nav=1&src=Yahoo',
          maxAge: 1
        },
        {
          date: '2020-03-27',
          epochDate: 1585333311,
          type: '10-K',
          title: 'Annual Report',
          edgarUrl: 'https://yahoo.brand.edgar-online.com/DisplayFiling.aspx?TabIndex=2&dcn=0001326380-20-000022&nav=1&src=Yahoo',
          maxAge: 1
        },
        {
          date: '2020-03-26',
          epochDate: 1585253416,
          type: '8-K',
          title: 'Disclosing Results of Operations and Financial Condition',
          edgarUrl: 'https://yahoo.brand.edgar-online.com/DisplayFiling.aspx?TabIndex=2&dcn=0001326380-20-000018&nav=1&src=Yahoo',
          maxAge: 1
        },
        {
          date: '2020-03-09',
          epochDate: 1583784415,
          type: '8-K',
          title: 'Disclosing Change in Directors or Principal Officers, Regulation FD Disclosure',
          edgarUrl: 'https://yahoo.brand.edgar-online.com/DisplayFiling.aspx?TabIndex=2&dcn=0001326380-20-000009&nav=1&src=Yahoo',
          maxAge: 1
        },
        {
          date: '2020-01-13',
          epochDate: 1578949854,
          type: '8-K',
          title: 'Disclosing Regulation FD Disclosure',
          edgarUrl: 'https://yahoo.brand.edgar-online.com/DisplayFiling.aspx?TabIndex=2&dcn=0001326380-20-000003&nav=1&src=Yahoo',
          maxAge: 1
        },
        {
          date: '2019-12-11',
          epochDate: 1576073070,
          type: '10-Q',
          title: 'Quarterly Report',
          edgarUrl: 'https://yahoo.brand.edgar-online.com/DisplayFiling.aspx?TabIndex=2&dcn=0001326380-19-000171&nav=1&src=Yahoo',
          maxAge: 1
        },
        {
          date: '2019-12-10',
          epochDate: 1576012399,
          type: '8-K',
          title: 'Disclosing Results of Operations and Financial Condition',
          edgarUrl: 'https://yahoo.brand.edgar-online.com/DisplayFiling.aspx?TabIndex=2&dcn=0001326380-19-000168&nav=1&src=Yahoo',
          maxAge: 1
        },
        {
          date: '2019-10-16',
          epochDate: 1571256397,
          type: '8-K',
          title: 'Disclosing Change in Directors or Principal Officers',
          edgarUrl: 'https://yahoo.brand.edgar-online.com/DisplayFiling.aspx?TabIndex=2&dcn=0001326380-19-000161&nav=1&src=Yahoo',
          maxAge: 1
        },
        {
          date: '2019-10-01',
          epochDate: 1569961961,
          type: '8-K',
          title: 'Disclosing Change in Directors or Principal Officers',
          edgarUrl: 'https://yahoo.brand.edgar-online.com/DisplayFiling.aspx?TabIndex=2&dcn=0001326380-19-000159&nav=1&src=Yahoo',
          maxAge: 1
        },
        {
          date: '2019-09-11',
          epochDate: 1568205309,
          type: '10-Q',
          title: 'Quarterly Report',
          edgarUrl: 'https://yahoo.brand.edgar-online.com/DisplayFiling.aspx?TabIndex=2&dcn=0001326380-19-000145&nav=1&src=Yahoo',
          maxAge: 1
        },
        {
          date: '2019-09-10',
          epochDate: 1568146131,
          type: '8-K',
          title: 'Disclosing Results of Operations and Financial Condition',
          edgarUrl: 'https://yahoo.brand.edgar-online.com/DisplayFiling.aspx?TabIndex=2&dcn=0001326380-19-000142&nav=1&src=Yahoo',
          maxAge: 1
        },
        {
          date: '2019-07-15',
          epochDate: 1563225281,
          type: '8-K',
          title: 'Disclosing Other Events',
          edgarUrl: 'https://yahoo.brand.edgar-online.com/DisplayFiling.aspx?TabIndex=2&dcn=0001193125-19-194113&nav=1&src=Yahoo',
          maxAge: 1
        },
        {
          date: '2019-06-27',
          epochDate: 1561666106,
          type: '8-K',
          title: 'Disclosing Submission of Matters to a Vote of Security Holders',
          edgarUrl: 'https://yahoo.brand.edgar-online.com/DisplayFiling.aspx?TabIndex=2&dcn=0001326380-19-000128&nav=1&src=Yahoo',
          maxAge: 1
        },
        {
          date: '2019-06-11',
          epochDate: 1560283845,
          type: '10-Q',
          title: 'Quarterly Report',
          edgarUrl: 'https://yahoo.brand.edgar-online.com/DisplayFiling.aspx?TabIndex=2&dcn=0001326380-19-000102&nav=1&src=Yahoo',
          maxAge: 1
        },
        {
          date: '2019-06-10',
          epochDate: 1560169613,
          type: '8-K',
          title: 'Disclosing Other Events, Financial Statements and Exhibits',
          edgarUrl: 'https://yahoo.brand.edgar-online.com/DisplayFiling.aspx?TabIndex=2&dcn=0001193125-19-168718&nav=1&src=Yahoo',
          maxAge: 1
        },
        {
          date: '2019-06-04',
          epochDate: 1559679040,
          type: '8-K',
          title: 'Disclosing Results of Operations and Financial Condition',
          edgarUrl: 'https://yahoo.brand.edgar-online.com/DisplayFiling.aspx?TabIndex=2&dcn=0001326380-19-000096&nav=1&src=Yahoo',
          maxAge: 1
        },
        {
          date: '2019-05-30',
          epochDate: 1559247194,
          type: '8-K',
          title: 'Disclosing Change in Directors or Principal Officers',
          edgarUrl: 'https://yahoo.brand.edgar-online.com/DisplayFiling.aspx?TabIndex=2&dcn=0001326380-19-000091&nav=1&src=Yahoo',
          maxAge: 1
        }
      ],
      maxAge: 86400
    },
    quoteType: {
      exchange: 'NYQ',
      shortName: 'GameStop Corporation',
      longName: 'GameStop Corp.',
      exchangeTimezoneName: 'America/New_York',
      exchangeTimezoneShortName: 'EDT',
      isEsgPopulated: false,
      gmtOffSetMilliseconds: '-14400000',
      quoteType: 'EQUITY',
      symbol: 'GME',
      messageBoardId: 'finmb_1342560',
      market: 'us_market'
    },
    calendarEvents: {
      maxAge: 1,
      earnings: {
        earningsDate: [
          {
            raw: 1624406400,
            fmt: '2021-06-23'
          },
          {
            raw: 1625011200,
            fmt: '2021-06-30'
          }
        ],
        earningsAverage: {
          raw: -0.83,
          fmt: '-0.83'
        },
        earningsLow: {
          raw: -1.32,
          fmt: '-1.32'
        },
        earningsHigh: {
          raw: -0.15,
          fmt: '-0.15'
        },
        revenueAverage: {
          raw: 1161600000,
          fmt: '1.16B',
          longFmt: '1,161,600,000'
        },
        revenueLow: {
          raw: 1118000000,
          fmt: '1.12B',
          longFmt: '1,118,000,000'
        },
        revenueHigh: {
          raw: 1237000000,
          fmt: '1.24B',
          longFmt: '1,237,000,000'
        }
      },
      exDividendDate: {
        raw: 1552521600,
        fmt: '2019-03-14'
      },
      dividendDate: {
        raw: 1553817600,
        fmt: '2019-03-29'
      }
    },
    summaryDetail: {
      previousClose: {
        raw: 280.01,
        fmt: '280.01'
      },
      regularMarketOpen: {
        raw: 292,
        fmt: '292.00'
      },
      twoHundredDayAverage: {
        raw: 118.59985,
        fmt: '118.60'
      },
      trailingAnnualDividendYield: {
        raw: 0,
        fmt: '0.00%'
      },
      payoutRatio: {
        raw: 0,
        fmt: '0.00%'
      },
      volume24Hr: {},
      regularMarketDayHigh: {
        raw: 344.66,
        fmt: '344.66'
      },
      navPrice: {},
      averageDailyVolume10Day: {
        raw: 8659100,
        fmt: '8.66M',
        longFmt: '8,659,100'
      },
      totalAssets: {},
      regularMarketPreviousClose: {
        raw: 280.01,
        fmt: '280.01'
      },
      fiftyDayAverage: {
        raw: 186.45772,
        fmt: '186.46'
      },
      trailingAnnualDividendRate: {
        raw: 0,
        fmt: '0.00'
      },
      open: {
        raw: 292,
        fmt: '292.00'
      },
      toCurrency: null,
      averageVolume10days: {
        raw: 8659100,
        fmt: '8.66M',
        longFmt: '8,659,100'
      },
      expireDate: {},
      yield: {},
      algorithm: null,
      dividendRate: {},
      exDividendDate: {
        raw: 1552521600,
        fmt: '2019-03-14'
      },
      beta: {
        raw: -1.936363,
        fmt: '-1.94'
      },
      circulatingSupply: {},
      startDate: {},
      regularMarketDayLow: {
        raw: 281,
        fmt: '281.00'
      },
      priceHint: {
        raw: 2,
        fmt: '2',
        longFmt: '2'
      },
      currency: 'USD',
      regularMarketVolume: {
        raw: 17347629,
        fmt: '17.35M',
        longFmt: '17,347,629'
      },
      lastMarket: null,
      maxSupply: {},
      openInterest: {},
      marketCap: {
        raw: 21231540224,
        fmt: '21.23B',
        longFmt: '21,231,540,224'
      },
      volumeAllCurrencies: {},
      strikePrice: {},
      averageVolume: {
        raw: 13524203,
        fmt: '13.52M',
        longFmt: '13,524,203'
      },
      priceToSalesTrailing12Months: {
        raw: 4.1713896,
        fmt: '4.17'
      },
      dayLow: {
        raw: 281,
        fmt: '281.00'
      },
      ask: {
        raw: 305.5,
        fmt: '305.50'
      },
      ytdReturn: {},
      askSize: {
        raw: 900,
        fmt: '900',
        longFmt: '900'
      },
      volume: {
        raw: 17347629,
        fmt: '17.35M',
        longFmt: '17,347,629'
      },
      fiftyTwoWeekHigh: {
        raw: 483,
        fmt: '483.00'
      },
      forwardPE: {
        raw: -508.4746,
        fmt: '-508.47'
      },
      maxAge: 1,
      fromCurrency: null,
      fiveYearAvgDividendYield: {},
      fiftyTwoWeekLow: {
        raw: 3.77,
        fmt: '3.77'
      },
      bid: {
        raw: 305.15,
        fmt: '305.15'
      },
      tradeable: false,
      dividendYield: {},
      bidSize: {
        raw: 3000,
        fmt: '3k',
        longFmt: '3,000'
      },
      dayHigh: {
        raw: 344.66,
        fmt: '344.66'
      }
    },
    symbol: 'GME',
    assetProfile: {
      zip: '76051',
      sector: 'Consumer Cyclical',
      fullTimeEmployees: 12000,
      compensationRisk: 3,
      auditRisk: 8,
      longBusinessSummary: 'GameStop Corp., a specialty retailer, provides games and entertainment products through its e-commerce properties and various stores in the United States, Canada, Australia, and Europe. The company sells new and pre-owned video game platforms; accessories, such as controllers, gaming headsets, virtual reality products, and memory cards; new and pre-owned video game software; and in-game digital currency, digital downloadable content, and full-game downloads, as well as network points cards, and prepaid digital and subscription cards. It also sells collectibles comprising licensed merchandise primarily related to the video game, television, and movie industries, as well as pop culture themes. The company operates its stores and e-commerce sites under the GameStop, EB Games, and Micromania brands; and collectibles stores under the Zing Pop Culture and ThinkGeek brand, as well as offers Game Informer, a print and digital video game publication featuring reviews of new title releases, game tips, and news regarding the video game industry. As of January 30, 2021, it operated 4,816 stores. The company was formerly known as GSC Holdings Corp. GameStop Corp. was founded in 1996 and is headquartered in Grapevine, Texas.',
      city: 'Grapevine',
      phone: '817 424 2000',
      state: 'TX',
      shareHolderRightsRisk: 3,
      compensationAsOfEpochDate: 1609372800,
      governanceEpochDate: 1622505600,
      boardRisk: 4,
      country: 'United States',
      companyOfficers: [
        {
          totalPay: {
            raw: 185694,
            fmt: '185.69k',
            longFmt: '185,694'
          },
          exercisedValue: {
            raw: 0,
            fmt: null,
            longFmt: '0'
          },
          yearBorn: 1963,
          name: 'Ms. Kathy P. Vrabeck',
          title: 'Exec. Chairman',
          maxAge: 1,
          fiscalYear: 2020,
          unexercisedValue: {
            raw: 0,
            fmt: null,
            longFmt: '0'
          },
          age: 57
        },
        {
          totalPay: {
            raw: 1054060,
            fmt: '1.05M',
            longFmt: '1,054,060'
          },
          exercisedValue: {
            raw: 0,
            fmt: null,
            longFmt: '0'
          },
          yearBorn: 1962,
          name: 'Mr. George E. Sherman',
          title: 'CEO & Director',
          maxAge: 1,
          fiscalYear: 2020,
          unexercisedValue: {
            raw: 0,
            fmt: null,
            longFmt: '0'
          },
          age: 58
        },
        {
          totalPay: {
            raw: 895519,
            fmt: '895.52k',
            longFmt: '895,519'
          },
          exercisedValue: {
            raw: 0,
            fmt: null,
            longFmt: '0'
          },
          yearBorn: 1968,
          name: 'Mr. James Anthony Bell',
          title: 'Sr. Adviser',
          maxAge: 1,
          fiscalYear: 2020,
          unexercisedValue: {
            raw: 0,
            fmt: null,
            longFmt: '0'
          },
          age: 52
        },
        {
          maxAge: 1,
          name: 'Ms. Diana  Saadeh-Jajeh',
          age: 49,
          title: 'Interim CFO, Sr. VP & Chief Accounting Officer',
          yearBorn: 1971,
          exercisedValue: {
            raw: 0,
            fmt: null,
            longFmt: '0'
          },
          unexercisedValue: {
            raw: 0,
            fmt: null,
            longFmt: '0'
          }
        },
        {
          maxAge: 1,
          name: 'Ms. Jenna  Owens',
          age: 41,
          title: 'Exec. VP & COO',
          yearBorn: 1979,
          exercisedValue: {
            raw: 0,
            fmt: null,
            longFmt: '0'
          },
          unexercisedValue: {
            raw: 0,
            fmt: null,
            longFmt: '0'
          }
        },
        {
          maxAge: 1,
          name: 'Mr. Matt  Francis',
          title: 'Chief Technology Officer',
          exercisedValue: {
            raw: 0,
            fmt: null,
            longFmt: '0'
          },
          unexercisedValue: {
            raw: 0,
            fmt: null,
            longFmt: '0'
          }
        },
        {
          maxAge: 1,
          name: 'Ms. Angela  Venuk',
          title: 'VP & Interim CIO',
          exercisedValue: {
            raw: 0,
            fmt: null,
            longFmt: '0'
          },
          unexercisedValue: {
            raw: 0,
            fmt: null,
            longFmt: '0'
          }
        },
        {
          maxAge: 1,
          name: 'Dan L. Reed',
          title: 'Sr. VP, Gen. Counsel & Corp. Sec.',
          exercisedValue: {
            raw: 0,
            fmt: null,
            longFmt: '0'
          },
          unexercisedValue: {
            raw: 0,
            fmt: null,
            longFmt: '0'
          }
        },
        {
          maxAge: 1,
          name: 'Mr. Joey  Mooring',
          title: 'Sr. Director of Corp. Communications',
          exercisedValue: {
            raw: 0,
            fmt: null,
            longFmt: '0'
          },
          unexercisedValue: {
            raw: 0,
            fmt: null,
            longFmt: '0'
          }
        },
        {
          maxAge: 1,
          name: 'Ms. Lisa  Keglovitz',
          title: 'Sr. VP of HR',
          exercisedValue: {
            raw: 0,
            fmt: null,
            longFmt: '0'
          },
          unexercisedValue: {
            raw: 0,
            fmt: null,
            longFmt: '0'
          }
        }
      ],
      website: 'http://www.gamestop.com',
      maxAge: 86400,
      overallRisk: 3,
      address1: '625 Westport Parkway',
      industry: 'Specialty Retail'
    },
    pageViews: {
      shortTermTrend: 'UP',
      midTermTrend: 'UP',
      longTermTrend: 'UP',
      maxAge: 1
    }
  },
  AMC: {
    financialsTemplate: {
      code: 'N',
      maxAge: 1
    },
    price: {
      quoteSourceName: 'Nasdaq Real Time Price',
      regularMarketOpen: {
        raw: 57.16,
        fmt: '57.16'
      },
      averageDailyVolume3Month: {
        raw: 140091934,
        fmt: '140.09M',
        longFmt: '140,091,934'
      },
      exchange: 'NYQ',
      regularMarketTime: 1623182402,
      volume24Hr: {},
      regularMarketDayHigh: {
        raw: 60.62,
        fmt: '60.62'
      },
      shortName: 'AMC Entertainment Holdings, Inc',
      averageDailyVolume10Day: {
        raw: 510436180,
        fmt: '510.44M',
        longFmt: '510,436,180'
      },
      longName: 'AMC Entertainment Holdings, Inc.',
      regularMarketChange: {
        raw: 0.049999237,
        fmt: '0.05'
      },
      currencySymbol: '$',
      regularMarketPreviousClose: {
        raw: 55,
        fmt: '55.00'
      },
      postMarketTime: 1623193105,
      preMarketPrice: {
        raw: 57.12,
        fmt: '57.12'
      },
      preMarketTime: 1623158999,
      exchangeDataDelayedBy: 0,
      toCurrency: null,
      postMarketChange: {
        raw: 0.22999954,
        fmt: '0.23'
      },
      postMarketPrice: {
        raw: 55.28,
        fmt: '55.28'
      },
      exchangeName: 'NYSE',
      preMarketChange: {
        raw: 2.12,
        fmt: '2.12'
      },
      circulatingSupply: {},
      regularMarketDayLow: {
        raw: 52.77,
        fmt: '52.77'
      },
      priceHint: {
        raw: 2,
        fmt: '2',
        longFmt: '2'
      },
      currency: 'USD',
      regularMarketPrice: {
        raw: 55.05,
        fmt: '55.05'
      },
      regularMarketVolume: {
        raw: 213048591,
        fmt: '213.05M',
        longFmt: '213,048,591.00'
      },
      lastMarket: null,
      regularMarketSource: 'DELAYED',
      openInterest: {},
      marketState: 'POST',
      underlyingSymbol: null,
      marketCap: {
        raw: 28258816000,
        fmt: '28.26B',
        longFmt: '28,258,816,000.00'
      },
      quoteType: 'EQUITY',
      preMarketChangePercent: {
        raw: 0.0385454,
        fmt: '3.85%'
      },
      volumeAllCurrencies: {},
      postMarketSource: 'FREE_REALTIME',
      strikePrice: {},
      symbol: 'AMC',
      postMarketChangePercent: {
        raw: 0.004178012,
        fmt: '0.42%'
      },
      preMarketSource: 'FREE_REALTIME',
      maxAge: 1,
      fromCurrency: null,
      regularMarketChangePercent: {
        raw: 0.00090907706,
        fmt: '0.09%'
      }
    },
    secFilings: {
      filings: [
        {
          date: '2021-06-03',
          epochDate: 1622721893,
          type: '8-K',
          title: 'Entry into a Material Definitive Agreement, Other Events, Financial Statements and Exhibits',
          edgarUrl: 'https://yahoo.brand.edgar-online.com/DisplayFiling.aspx?TabIndex=2&dcn=0001104659-21-076091&nav=1&src=Yahoo',
          maxAge: 1
        },
        {
          date: '2021-06-02',
          epochDate: 1622631872,
          type: '8-K',
          title: 'Other Events, Financial Statements and Exhibits',
          edgarUrl: 'https://yahoo.brand.edgar-online.com/DisplayFiling.aspx?TabIndex=2&dcn=0001104659-21-075296&nav=1&src=Yahoo',
          maxAge: 1
        },
        {
          date: '2021-06-01',
          epochDate: 1622545983,
          type: '8-K',
          title: 'Unregistered Sale of Equity Securities, Other Events, Financial Statements and Exhibits',
          edgarUrl: 'https://yahoo.brand.edgar-online.com/DisplayFiling.aspx?TabIndex=2&dcn=0001104659-21-074526&nav=1&src=Yahoo',
          maxAge: 1
        },
        {
          date: '2021-05-24',
          epochDate: 1621855863,
          type: '8-K',
          title: 'Change in Directors or Principal Officers, Other Events, Financial Statements and Exhibits',
          edgarUrl: 'https://yahoo.brand.edgar-online.com/DisplayFiling.aspx?TabIndex=2&dcn=0001104659-21-070705&nav=1&src=Yahoo',
          maxAge: 1
        },
        {
          date: '2021-05-06',
          epochDate: 1620338374,
          type: '10-Q',
          title: 'Quarterly Report',
          edgarUrl: 'https://yahoo.brand.edgar-online.com/DisplayFiling.aspx?TabIndex=2&dcn=0001411579-21-000038&nav=1&src=Yahoo',
          maxAge: 1
        },
        {
          date: '2021-05-06',
          epochDate: 1620336360,
          type: '8-K',
          title: 'Results of Operations and Financial Condition, Financial Statements and Exhibits',
          edgarUrl: 'https://yahoo.brand.edgar-online.com/DisplayFiling.aspx?TabIndex=2&dcn=0001411579-21-000036&nav=1&src=Yahoo',
          maxAge: 1
        },
        {
          date: '2021-04-27',
          epochDate: 1619562333,
          type: '8-K',
          title: 'Entry into a Material Definitive Agreement, Results of Operations and Financial Condition, Other Events, Financial Statements and Exhibits',
          edgarUrl: 'https://yahoo.brand.edgar-online.com/DisplayFiling.aspx?TabIndex=2&dcn=0001104659-21-055713&nav=1&src=Yahoo',
          maxAge: 1
        },
        {
          date: '2021-03-19',
          epochDate: 1616193044,
          type: '8-K',
          title: 'Change in Directors or Principal Officers, Financial Statements and Exhibits',
          edgarUrl: 'https://yahoo.brand.edgar-online.com/DisplayFiling.aspx?TabIndex=2&dcn=0001104659-21-039221&nav=1&src=Yahoo',
          maxAge: 1
        },
        {
          date: '2021-03-12',
          epochDate: 1615559090,
          type: '10-K',
          title: 'Annual Report',
          edgarUrl: 'https://yahoo.brand.edgar-online.com/DisplayFiling.aspx?TabIndex=2&dcn=0001411579-21-000006&nav=1&src=Yahoo',
          maxAge: 1
        },
        {
          date: '2021-03-10',
          epochDate: 1615411428,
          type: '8-K',
          title: 'Results of Operations and Financial Condition, Financial Statements and Exhibits',
          edgarUrl: 'https://yahoo.brand.edgar-online.com/DisplayFiling.aspx?TabIndex=2&dcn=0001411579-21-000004&nav=1&src=Yahoo',
          maxAge: 1
        },
        {
          date: '2021-03-09',
          epochDate: 1615327578,
          type: '8-K',
          title: 'Entry into a Material Definitive Agreement, Financial Statements and Exhibits',
          edgarUrl: 'https://yahoo.brand.edgar-online.com/DisplayFiling.aspx?TabIndex=2&dcn=0001104659-21-033869&nav=1&src=Yahoo',
          maxAge: 1
        },
        {
          date: '2021-02-26',
          epochDate: 1614378421,
          type: '8-K',
          title: 'Change in Directors or Principal Officers, Other Events',
          edgarUrl: 'https://yahoo.brand.edgar-online.com/DisplayFiling.aspx?TabIndex=2&dcn=0001104659-21-029374&nav=1&src=Yahoo',
          maxAge: 1
        },
        {
          date: '2021-02-17',
          epochDate: 1613561537,
          type: '8-K',
          title: 'Entry into a Material Definitive Agreement, Creation of a Direct Financial Obligation or an Obligation under an Off-Balance Sheet Arrangement of a Registrant, Financial Statements and Exhibits',
          edgarUrl: 'https://yahoo.brand.edgar-online.com/DisplayFiling.aspx?TabIndex=2&dcn=0001104659-21-024646&nav=1&src=Yahoo',
          maxAge: 1
        },
        {
          date: '2021-02-05',
          epochDate: 1612560397,
          type: '8-K',
          title: 'Unregistered Sale of Equity Securities, Material Modification to Rights of Security Holders, Financial Statements and Exhibits',
          edgarUrl: 'https://yahoo.brand.edgar-online.com/DisplayFiling.aspx?TabIndex=2&dcn=0001104659-21-012939&nav=1&src=Yahoo',
          maxAge: 1
        },
        {
          date: '2021-01-28',
          epochDate: 1611831953,
          type: '8-K',
          title: 'Unregistered Sale of Equity Securities, Other Events',
          edgarUrl: 'https://yahoo.brand.edgar-online.com/DisplayFiling.aspx?TabIndex=2&dcn=0001104659-21-008352&nav=1&src=Yahoo',
          maxAge: 1
        },
        {
          date: '2021-01-25',
          epochDate: 1611574604,
          type: '8-K',
          title: 'Entry into a Material Definitive Agreement, Results of Operations and Financial Condition, Creation of a Direct Financial Obligation or an Obligation under an Off-Balance Sheet Arrangement of a Registrant, Amendments to Articles of Inc. or Bylaws; Change in Fiscal Year, Other Events, Financial Statements and Exhibits',
          edgarUrl: 'https://yahoo.brand.edgar-online.com/DisplayFiling.aspx?TabIndex=2&dcn=0001104659-21-006813&nav=1&src=Yahoo',
          maxAge: 1
        },
        {
          date: '2021-01-19',
          epochDate: 1611055927,
          type: '8-K',
          title: 'Entry into a Material Definitive Agreement, Creation of a Direct Financial Obligation or an Obligation under an Off-Balance Sheet Arrangement of a Registrant, Financial Statements and Exhibits',
          edgarUrl: 'https://yahoo.brand.edgar-online.com/DisplayFiling.aspx?TabIndex=2&dcn=0001104659-21-004947&nav=1&src=Yahoo',
          maxAge: 1
        },
        {
          date: '2020-12-11',
          epochDate: 1607721615,
          type: '8-K',
          title: 'Entry into a Material Definitive Agreement, Submission of Matters to a Vote of Security Holders, Financial Statements and Exhibits',
          edgarUrl: 'https://yahoo.brand.edgar-online.com/DisplayFiling.aspx?TabIndex=2&dcn=0001104659-20-134785&nav=1&src=Yahoo',
          maxAge: 1
        },
        {
          date: '2020-12-11',
          epochDate: 1607684692,
          type: '8-K',
          title: 'Entry into a Material Definitive Agreement, Creation of a Direct Financial Obligation or an Obligation under an Off-Balance Sheet Arrangement of a Registrant, Unregistered Sale of Equity Securities, Other Events, Financial Statements and Exhibits',
          edgarUrl: 'https://yahoo.brand.edgar-online.com/DisplayFiling.aspx?TabIndex=2&dcn=0001104659-20-134414&nav=1&src=Yahoo',
          maxAge: 1
        },
        {
          date: '2020-11-10',
          epochDate: 1605046794,
          type: '8-K',
          title: 'Entry into a Material Definitive Agreement, Financial Statements and Exhibits',
          edgarUrl: 'https://yahoo.brand.edgar-online.com/DisplayFiling.aspx?TabIndex=2&dcn=0001104659-20-123668&nav=1&src=Yahoo',
          maxAge: 1
        },
        {
          date: '2020-11-04',
          epochDate: 1604487786,
          type: '10-Q',
          title: 'Quarterly Report',
          edgarUrl: 'https://yahoo.brand.edgar-online.com/DisplayFiling.aspx?TabIndex=2&dcn=0001411579-20-000074&nav=1&src=Yahoo',
          maxAge: 1
        },
        {
          date: '2020-11-02',
          epochDate: 1604352243,
          type: '8-K',
          title: 'Results of Operations and Financial Condition, Financial Statements and Exhibits',
          edgarUrl: 'https://yahoo.brand.edgar-online.com/DisplayFiling.aspx?TabIndex=2&dcn=0001411579-20-000071&nav=1&src=Yahoo',
          maxAge: 1
        },
        {
          date: '2020-10-20',
          epochDate: 1603194509,
          type: '8-K',
          title: 'Entry into a Material Definitive Agreement, Results of Operations and Financial Condition, Other Events, Financial Statements and Exhibits',
          edgarUrl: 'https://yahoo.brand.edgar-online.com/DisplayFiling.aspx?TabIndex=2&dcn=0001104659-20-116241&nav=1&src=Yahoo',
          maxAge: 1
        },
        {
          date: '2020-10-13',
          epochDate: 1602589575,
          type: '8-K',
          title: 'Other Events',
          edgarUrl: 'https://yahoo.brand.edgar-online.com/DisplayFiling.aspx?TabIndex=2&dcn=0001104659-20-114155&nav=1&src=Yahoo',
          maxAge: 1
        },
        {
          date: '2020-09-24',
          epochDate: 1600954003,
          type: '8-K',
          title: 'Entry into a Material Definitive Agreement, Other Events, Financial Statements and Exhibits',
          edgarUrl: 'https://yahoo.brand.edgar-online.com/DisplayFiling.aspx?TabIndex=2&dcn=0001104659-20-108129&nav=1&src=Yahoo',
          maxAge: 1
        },
        {
          date: '2020-09-15',
          epochDate: 1600208753,
          type: '8-K',
          title: 'Other Events',
          edgarUrl: 'https://yahoo.brand.edgar-online.com/DisplayFiling.aspx?TabIndex=2&dcn=0001104659-20-105307&nav=1&src=Yahoo',
          maxAge: 1
        },
        {
          date: '2020-08-31',
          epochDate: 1598875285,
          type: '8-K',
          title: 'Regulation FD Disclosure, Financial Statements and Exhibits',
          edgarUrl: 'https://yahoo.brand.edgar-online.com/DisplayFiling.aspx?TabIndex=2&dcn=0001104659-20-100411&nav=1&src=Yahoo',
          maxAge: 1
        },
        {
          date: '2020-08-06',
          epochDate: 1596751871,
          type: '10-Q',
          title: 'Quarterly Report',
          edgarUrl: 'https://yahoo.brand.edgar-online.com/DisplayFiling.aspx?TabIndex=2&dcn=0001411579-20-000068&nav=1&src=Yahoo',
          maxAge: 1
        },
        {
          date: '2020-08-06',
          epochDate: 1596749886,
          type: '8-K',
          title: 'Results of Operations and Financial Condition, Financial Statements and Exhibits',
          edgarUrl: 'https://yahoo.brand.edgar-online.com/DisplayFiling.aspx?TabIndex=2&dcn=0001411579-20-000065&nav=1&src=Yahoo',
          maxAge: 1
        },
        {
          date: '2020-07-31',
          epochDate: 1596234136,
          type: '8-K',
          title: 'Entry into a Material Definitive Agreement, Creation of a Direct Financial Obligation or an Obligation under an Off-Balance Sheet Arrangement of a Registrant, Unregistered Sale of Equity Securities, Other Events, Financial Statements and Exhibits',
          edgarUrl: 'https://yahoo.brand.edgar-online.com/DisplayFiling.aspx?TabIndex=2&dcn=0001104659-20-089170&nav=1&src=Yahoo',
          maxAge: 1
        },
        {
          date: '2020-07-10',
          epochDate: 1594419981,
          type: '8-K',
          title: 'Entry into a Material Definitive Agreement, Regulation FD Disclosure, Financial Statements and Exhibits',
          edgarUrl: 'https://yahoo.brand.edgar-online.com/DisplayFiling.aspx?TabIndex=2&dcn=0001104659-20-082794&nav=1&src=Yahoo',
          maxAge: 1
        },
        {
          date: '2020-06-30',
          epochDate: 1593528384,
          type: '8-K',
          title: 'Regulation FD Disclosure, Financial Statements and Exhibits',
          edgarUrl: 'https://yahoo.brand.edgar-online.com/DisplayFiling.aspx?TabIndex=2&dcn=0001104659-20-078477&nav=1&src=Yahoo',
          maxAge: 1
        },
        {
          date: '2020-06-22',
          epochDate: 1592824046,
          type: '8-K',
          title: 'Regulation FD Disclosure, Financial Statements and Exhibits',
          edgarUrl: 'https://yahoo.brand.edgar-online.com/DisplayFiling.aspx?TabIndex=2&dcn=0001104659-20-075414&nav=1&src=Yahoo',
          maxAge: 1
        },
        {
          date: '2020-06-09',
          epochDate: 1591740350,
          type: '10-Q',
          title: 'Quarterly Report',
          edgarUrl: 'https://yahoo.brand.edgar-online.com/DisplayFiling.aspx?TabIndex=2&dcn=0001411579-20-000058&nav=1&src=Yahoo',
          maxAge: 1
        },
        {
          date: '2020-06-03',
          epochDate: 1591181560,
          type: '8-K',
          title: 'Disclosing Results of Operations and Financial Condition, Regulation FD Dis',
          edgarUrl: 'https://yahoo.brand.edgar-online.com/DisplayFiling.aspx?TabIndex=2&dcn=0001104659-20-069211&nav=1&src=Yahoo',
          maxAge: 1
        },
        {
          date: '2020-04-24',
          epochDate: 1587759428,
          type: '8-K',
          title: 'Disclosing Entry into a Material Definitive Agreement, Creation of a Direct',
          edgarUrl: 'https://yahoo.brand.edgar-online.com/DisplayFiling.aspx?TabIndex=2&dcn=0001104659-20-050996&nav=1&src=Yahoo',
          maxAge: 1
        },
        {
          date: '2020-04-17',
          epochDate: 1587126513,
          type: '8-K',
          title: 'Disclosing Results of Operations and Financial Condition, Regulation FD Dis',
          edgarUrl: 'https://yahoo.brand.edgar-online.com/DisplayFiling.aspx?TabIndex=2&dcn=0001104659-20-047944&nav=1&src=Yahoo',
          maxAge: 1
        },
        {
          date: '2020-03-23',
          epochDate: 1584963136,
          type: '8-K',
          title: 'Disclosing Regulation FD Disclosure',
          edgarUrl: 'https://yahoo.brand.edgar-online.com/DisplayFiling.aspx?TabIndex=2&dcn=0001104659-20-037072&nav=1&src=Yahoo',
          maxAge: 1
        },
        {
          date: '2020-03-20',
          epochDate: 1584739624,
          type: '8-K',
          title: 'Disclosing Change in Directors or Principal Officers',
          edgarUrl: 'https://yahoo.brand.edgar-online.com/DisplayFiling.aspx?TabIndex=2&dcn=0001104659-20-036938&nav=1&src=Yahoo',
          maxAge: 1
        },
        {
          date: '2020-03-03',
          epochDate: 1583274355,
          type: '8-K',
          title: 'Disclosing Financial Statements and Exhibits',
          edgarUrl: 'https://yahoo.brand.edgar-online.com/DisplayFiling.aspx?TabIndex=2&dcn=0001411579-20-000043&nav=1&src=Yahoo',
          maxAge: 1
        },
        {
          date: '2020-02-28',
          epochDate: 1582888241,
          type: '10-K',
          title: 'Annual Report',
          edgarUrl: 'https://yahoo.brand.edgar-online.com/DisplayFiling.aspx?TabIndex=2&dcn=0001411579-20-000027&nav=1&src=Yahoo',
          maxAge: 1
        },
        {
          date: '2020-02-27',
          epochDate: 1582839567,
          type: '8-K',
          title: 'Disclosing Results of Operations and Financial Condition, Financial Stateme',
          edgarUrl: 'https://yahoo.brand.edgar-online.com/DisplayFiling.aspx?TabIndex=2&dcn=0001411579-20-000024&nav=1&src=Yahoo',
          maxAge: 1
        },
        {
          date: '2020-01-08',
          epochDate: 1578503831,
          type: '8-K',
          title: 'Disclosing Financial Statements and Exhibits',
          edgarUrl: 'https://yahoo.brand.edgar-online.com/DisplayFiling.aspx?TabIndex=2&dcn=0001411579-20-000013&nav=1&src=Yahoo',
          maxAge: 1
        },
        {
          date: '2019-12-03',
          epochDate: 1575411321,
          type: '8-K',
          title: 'Disclosing Other Events, Financial Statements and Exhibits',
          edgarUrl: 'https://yahoo.brand.edgar-online.com/DisplayFiling.aspx?TabIndex=2&dcn=0001411579-19-000068&nav=1&src=Yahoo',
          maxAge: 1
        },
        {
          date: '2019-11-20',
          epochDate: 1574247822,
          type: '8-K',
          title: "Disclosing Changes in Registrant's Certifying Accountant, Financial Stateme",
          edgarUrl: 'https://yahoo.brand.edgar-online.com/DisplayFiling.aspx?TabIndex=2&dcn=0001411579-19-000066&nav=1&src=Yahoo',
          maxAge: 1
        },
        {
          date: '2019-11-07',
          epochDate: 1573132922,
          type: '10-Q',
          title: 'Quarterly Report',
          edgarUrl: 'https://yahoo.brand.edgar-online.com/DisplayFiling.aspx?TabIndex=2&dcn=0001411579-19-000063&nav=1&src=Yahoo',
          maxAge: 1
        },
        {
          date: '2019-11-07',
          epochDate: 1573127445,
          type: '8-K',
          title: 'Disclosing Results of Operations and Financial Condition, Financial Stateme',
          edgarUrl: 'https://yahoo.brand.edgar-online.com/DisplayFiling.aspx?TabIndex=2&dcn=0001411579-19-000061&nav=1&src=Yahoo',
          maxAge: 1
        },
        {
          date: '2019-10-25',
          epochDate: 1572002286,
          type: '8-K',
          title: 'Disclosing Other Events, Financial Statements and Exhibits',
          edgarUrl: 'https://yahoo.brand.edgar-online.com/DisplayFiling.aspx?TabIndex=2&dcn=0001411579-19-000054&nav=1&src=Yahoo',
          maxAge: 1
        },
        {
          date: '2019-10-11',
          epochDate: 1570827837,
          type: '8-K',
          title: 'Disclosing Financial Statements and Exhibits',
          edgarUrl: 'https://yahoo.brand.edgar-online.com/DisplayFiling.aspx?TabIndex=2&dcn=0001411579-19-000051&nav=1&src=Yahoo',
          maxAge: 1
        },
        {
          date: '2019-09-10',
          epochDate: 1568146724,
          type: '8-K/A',
          title: 'AMC ENTERTAINMENT HOLDINGS, INC. FILES (8-K/A) Disclosing Results of Operations and Financial Condition',
          edgarUrl: 'https://yahoo.brand.edgar-online.com/DisplayFiling.aspx?TabIndex=2&dcn=0001410578-19-001155&nav=1&src=Yahoo',
          maxAge: 1
        },
        {
          date: '2019-08-08',
          epochDate: 1565265215,
          type: '10-Q',
          title: 'Quarterly Report',
          edgarUrl: 'https://yahoo.brand.edgar-online.com/DisplayFiling.aspx?TabIndex=2&dcn=0001411579-19-000047&nav=1&src=Yahoo',
          maxAge: 1
        },
        {
          date: '2019-08-08',
          epochDate: 1565263982,
          type: '8-K',
          title: 'Disclosing Results of Operations and Financial Condition, Financial Stateme',
          edgarUrl: 'https://yahoo.brand.edgar-online.com/DisplayFiling.aspx?TabIndex=2&dcn=0001411579-19-000045&nav=1&src=Yahoo',
          maxAge: 1
        },
        {
          date: '2019-08-05',
          epochDate: 1565008609,
          type: '8-K',
          title: 'Disclosing Other Events',
          edgarUrl: 'https://yahoo.brand.edgar-online.com/DisplayFiling.aspx?TabIndex=2&dcn=0001411579-19-000041&nav=1&src=Yahoo',
          maxAge: 1
        },
        {
          date: '2019-07-09',
          epochDate: 1562704818,
          type: '8-K',
          title: 'Disclosing Change in Directors or Principal Officers, Other Events, Financi',
          edgarUrl: 'https://yahoo.brand.edgar-online.com/DisplayFiling.aspx?TabIndex=2&dcn=0001411579-19-000039&nav=1&src=Yahoo',
          maxAge: 1
        }
      ],
      maxAge: 86400
    },
    quoteType: {
      exchange: 'NYQ',
      shortName: 'AMC Entertainment Holdings, Inc',
      longName: 'AMC Entertainment Holdings, Inc.',
      exchangeTimezoneName: 'America/New_York',
      exchangeTimezoneShortName: 'EDT',
      isEsgPopulated: false,
      gmtOffSetMilliseconds: '-14400000',
      quoteType: 'EQUITY',
      symbol: 'AMC',
      messageBoardId: 'finmb_34874958',
      market: 'us_market'
    },
    calendarEvents: {
      maxAge: 1,
      earnings: {
        earningsDate: [
          {
            raw: 1628035200,
            fmt: '2021-08-04'
          },
          {
            raw: 1628467200,
            fmt: '2021-08-09'
          }
        ],
        earningsAverage: {
          raw: -0.94,
          fmt: '-0.94'
        },
        earningsLow: {
          raw: -1.11,
          fmt: '-1.11'
        },
        earningsHigh: {
          raw: -0.8,
          fmt: '-0.80'
        },
        revenueAverage: {
          raw: 375280000,
          fmt: '375.28M',
          longFmt: '375,280,000'
        },
        revenueLow: {
          raw: 292600000,
          fmt: '292.6M',
          longFmt: '292,600,000'
        },
        revenueHigh: {
          raw: 456710000,
          fmt: '456.71M',
          longFmt: '456,710,000'
        }
      },
      exDividendDate: {
        raw: 1583452800,
        fmt: '2020-03-06'
      },
      dividendDate: {
        raw: 1584921600,
        fmt: '2020-03-23'
      }
    },
    summaryDetail: {
      previousClose: {
        raw: 55,
        fmt: '55.00'
      },
      regularMarketOpen: {
        raw: 57.16,
        fmt: '57.16'
      },
      twoHundredDayAverage: {
        raw: 9.53637,
        fmt: '9.54'
      },
      trailingAnnualDividendYield: {
        raw: 0.00054545456,
        fmt: '0.05%'
      },
      payoutRatio: {
        raw: 0,
        fmt: '0.00%'
      },
      volume24Hr: {},
      regularMarketDayHigh: {
        raw: 60.62,
        fmt: '60.62'
      },
      navPrice: {},
      averageDailyVolume10Day: {
        raw: 510436180,
        fmt: '510.44M',
        longFmt: '510,436,180'
      },
      totalAssets: {},
      regularMarketPreviousClose: {
        raw: 55,
        fmt: '55.00'
      },
      fiftyDayAverage: {
        raw: 17.769428,
        fmt: '17.77'
      },
      trailingAnnualDividendRate: {
        raw: 0.03,
        fmt: '0.03'
      },
      open: {
        raw: 57.16,
        fmt: '57.16'
      },
      toCurrency: null,
      averageVolume10days: {
        raw: 510436180,
        fmt: '510.44M',
        longFmt: '510,436,180'
      },
      expireDate: {},
      yield: {},
      algorithm: null,
      dividendRate: {},
      exDividendDate: {
        raw: 1583452800,
        fmt: '2020-03-06'
      },
      beta: {
        raw: 1.265217,
        fmt: '1.27'
      },
      circulatingSupply: {},
      startDate: {},
      regularMarketDayLow: {
        raw: 52.77,
        fmt: '52.77'
      },
      priceHint: {
        raw: 2,
        fmt: '2',
        longFmt: '2'
      },
      currency: 'USD',
      regularMarketVolume: {
        raw: 213048591,
        fmt: '213.05M',
        longFmt: '213,048,591'
      },
      lastMarket: null,
      maxSupply: {},
      openInterest: {},
      marketCap: {
        raw: 28258816000,
        fmt: '28.26B',
        longFmt: '28,258,816,000'
      },
      volumeAllCurrencies: {},
      strikePrice: {},
      averageVolume: {
        raw: 140091934,
        fmt: '140.09M',
        longFmt: '140,091,934'
      },
      priceToSalesTrailing12Months: {
        raw: 62.909206,
        fmt: '62.91'
      },
      dayLow: {
        raw: 52.77,
        fmt: '52.77'
      },
      ask: {
        raw: 55.25,
        fmt: '55.25'
      },
      ytdReturn: {},
      askSize: {
        raw: 1400,
        fmt: '1.4k',
        longFmt: '1,400'
      },
      volume: {
        raw: 213048591,
        fmt: '213.05M',
        longFmt: '213,048,591'
      },
      fiftyTwoWeekHigh: {
        raw: 72.62,
        fmt: '72.62'
      },
      forwardPE: {
        raw: -67.13415,
        fmt: '-67.13'
      },
      maxAge: 1,
      fromCurrency: null,
      fiveYearAvgDividendYield: {},
      fiftyTwoWeekLow: {
        raw: 1.91,
        fmt: '1.91'
      },
      bid: {
        raw: 55.07,
        fmt: '55.07'
      },
      tradeable: false,
      dividendYield: {},
      bidSize: {
        raw: 900,
        fmt: '900',
        longFmt: '900'
      },
      dayHigh: {
        raw: 60.62,
        fmt: '60.62'
      }
    },
    symbol: 'AMC',
    assetProfile: {
      zip: '66211',
      sector: 'Communication Services',
      fullTimeEmployees: 3449,
      compensationRisk: 10,
      auditRisk: 4,
      longBusinessSummary: 'AMC Entertainment Holdings, Inc., through its subsidiaries, involved in the theatrical exhibition business. The company owns, operates, or has interests in theatres. As of March 12, 2021, it operated approximately 1000 theatres and 10,700 screens in the United States and internationally. The company was founded in 1920 and is headquartered in Leawood, Kansas.',
      city: 'Leawood',
      phone: '913-213-2000',
      state: 'KS',
      shareHolderRightsRisk: 6,
      compensationAsOfEpochDate: 1609372800,
      governanceEpochDate: 1622505600,
      boardRisk: 10,
      country: 'United States',
      companyOfficers: [
        {
          totalPay: {
            raw: 6127797,
            fmt: '6.13M',
            longFmt: '6,127,797'
          },
          exercisedValue: {
            raw: 0,
            fmt: null,
            longFmt: '0'
          },
          yearBorn: 1955,
          name: 'Mr. Adam M. Aron',
          title: 'Pres, CEO & Director',
          maxAge: 1,
          fiscalYear: 2020,
          unexercisedValue: {
            raw: 0,
            fmt: null,
            longFmt: '0'
          },
          age: 65
        },
        {
          totalPay: {
            raw: 1507068,
            fmt: '1.51M',
            longFmt: '1,507,068'
          },
          exercisedValue: {
            raw: 0,
            fmt: null,
            longFmt: '0'
          },
          yearBorn: 1965,
          name: 'Mr. Sean D. Goodman',
          title: 'Exec. VP & CFO',
          maxAge: 1,
          fiscalYear: 2020,
          unexercisedValue: {
            raw: 0,
            fmt: null,
            longFmt: '0'
          },
          age: 55
        },
        {
          totalPay: {
            raw: 834067,
            fmt: '834.07k',
            longFmt: '834,067'
          },
          exercisedValue: {
            raw: 0,
            fmt: null,
            longFmt: '0'
          },
          yearBorn: 1967,
          name: 'Mr. Stephen A. Colanero',
          title: 'Exec. VP & CMO',
          maxAge: 1,
          fiscalYear: 2020,
          unexercisedValue: {
            raw: 0,
            fmt: null,
            longFmt: '0'
          },
          age: 53
        },
        {
          totalPay: {
            raw: 896569,
            fmt: '896.57k',
            longFmt: '896,569'
          },
          exercisedValue: {
            raw: 0,
            fmt: null,
            longFmt: '0'
          },
          yearBorn: 1957,
          name: 'Mr. John D. McDonald',
          title: 'Exec. VP of U.S. Operations',
          maxAge: 1,
          fiscalYear: 2020,
          unexercisedValue: {
            raw: 0,
            fmt: null,
            longFmt: '0'
          },
          age: 63
        },
        {
          totalPay: {
            raw: 866158,
            fmt: '866.16k',
            longFmt: '866,158'
          },
          exercisedValue: {
            raw: 0,
            fmt: null,
            longFmt: '0'
          },
          yearBorn: 1969,
          name: 'Ms. Elizabeth Furst Frank',
          title: 'Exec. VP of Worldwide Programming & Chief Content Officer',
          maxAge: 1,
          fiscalYear: 2020,
          unexercisedValue: {
            raw: 0,
            fmt: null,
            longFmt: '0'
          },
          age: 51
        },
        {
          maxAge: 1,
          name: 'Mr. Chris A. Cox',
          age: 54,
          title: 'Sr. VP & Chief Accounting Officer',
          yearBorn: 1966,
          exercisedValue: {
            raw: 0,
            fmt: null,
            longFmt: '0'
          },
          unexercisedValue: {
            raw: 0,
            fmt: null,
            longFmt: '0'
          }
        },
        {
          maxAge: 1,
          name: 'Mr. John C. Merriwether',
          title: 'VP of Investor Relations',
          exercisedValue: {
            raw: 0,
            fmt: null,
            longFmt: '0'
          },
          unexercisedValue: {
            raw: 0,
            fmt: null,
            longFmt: '0'
          }
        },
        {
          maxAge: 1,
          name: 'Mr. Kevin M. Connor Esq.',
          age: 57,
          title: 'Sr. VP, Gen. Counsel & Sec.',
          yearBorn: 1963,
          fiscalYear: 2011,
          exercisedValue: {
            raw: 0,
            fmt: null,
            longFmt: '0'
          },
          unexercisedValue: {
            raw: 0,
            fmt: null,
            longFmt: '0'
          }
        },
        {
          maxAge: 1,
          name: 'Ms. Carla C. Chavarria CBP, CCP, PHR',
          age: 54,
          title: 'Sr. VP & Chief HR Officer',
          yearBorn: 1966,
          exercisedValue: {
            raw: 0,
            fmt: null,
            longFmt: '0'
          },
          unexercisedValue: {
            raw: 0,
            fmt: null,
            longFmt: '0'
          }
        },
        {
          maxAge: 1,
          name: 'Mr. Daniel E. Ellis J.D.',
          age: 51,
          title: 'Sr. VP of Devel. & International',
          yearBorn: 1969,
          exercisedValue: {
            raw: 0,
            fmt: null,
            longFmt: '0'
          },
          unexercisedValue: {
            raw: 0,
            fmt: null,
            longFmt: '0'
          }
        }
      ],
      website: 'http://www.amctheatres.com',
      maxAge: 86400,
      overallRisk: 10,
      address1: 'One AMC Way',
      industry: 'Entertainment',
      address2: '11500 Ash Street'
    },
    pageViews: {
      shortTermTrend: 'DOWN',
      midTermTrend: 'UP',
      longTermTrend: 'UP',
      maxAge: 1
    }
  },
  BB: {
    financialsTemplate: {
      code: 'N',
      maxAge: 1
    },
    price: {
      quoteSourceName: 'Nasdaq Real Time Price',
      regularMarketOpen: {
        raw: 16.48,
        fmt: '16.48'
      },
      averageDailyVolume3Month: {
        raw: 33670134,
        fmt: '33.67M',
        longFmt: '33,670,134'
      },
      exchange: 'NYQ',
      regularMarketTime: 1623182402,
      volume24Hr: {},
      regularMarketDayHigh: {
        raw: 17.17,
        fmt: '17.17'
      },
      shortName: 'BlackBerry Limited',
      averageDailyVolume10Day: {
        raw: 268052380,
        fmt: '268.05M',
        longFmt: '268,052,380'
      },
      longName: 'BlackBerry Limited',
      regularMarketChange: {
        raw: 0.029999733,
        fmt: '0.03'
      },
      currencySymbol: '$',
      regularMarketPreviousClose: {
        raw: 15.77,
        fmt: '15.77'
      },
      postMarketTime: 1623193120,
      preMarketPrice: {
        raw: 16.47,
        fmt: '16.47'
      },
      preMarketTime: 1623158999,
      exchangeDataDelayedBy: 0,
      toCurrency: null,
      postMarketChange: {
        raw: -0.029999733,
        fmt: '-0.03'
      },
      postMarketPrice: {
        raw: 15.77,
        fmt: '15.77'
      },
      exchangeName: 'NYSE',
      preMarketChange: {
        raw: 0.699999,
        fmt: '0.70'
      },
      circulatingSupply: {},
      regularMarketDayLow: {
        raw: 15.25,
        fmt: '15.25'
      },
      priceHint: {
        raw: 2,
        fmt: '2',
        longFmt: '2'
      },
      currency: 'USD',
      regularMarketPrice: {
        raw: 15.8,
        fmt: '15.80'
      },
      regularMarketVolume: {
        raw: 160598924,
        fmt: '160.60M',
        longFmt: '160,598,924.00'
      },
      lastMarket: null,
      regularMarketSource: 'DELAYED',
      openInterest: {},
      marketState: 'POST',
      underlyingSymbol: null,
      marketCap: {
        raw: 8929717248,
        fmt: '8.93B',
        longFmt: '8,929,717,248.00'
      },
      quoteType: 'EQUITY',
      preMarketChangePercent: {
        raw: 0.044388,
        fmt: '4.44%'
      },
      volumeAllCurrencies: {},
      postMarketSource: 'FREE_REALTIME',
      strikePrice: {},
      symbol: 'BB',
      postMarketChangePercent: {
        raw: -0.0018987173,
        fmt: '-0.19%'
      },
      preMarketSource: 'FREE_REALTIME',
      maxAge: 1,
      fromCurrency: null,
      regularMarketChangePercent: {
        raw: 0.0019023293,
        fmt: '0.19%'
      }
    },
    secFilings: {
      filings: [
        {
          date: '2021-04-29',
          epochDate: 1619731907,
          type: '8-K',
          title: 'Change in Directors or Principal Officers, Financial Statements and Exhibits',
          edgarUrl: 'https://yahoo.brand.edgar-online.com/DisplayFiling.aspx?TabIndex=2&dcn=0001070235-21-000036&nav=1&src=Yahoo',
          maxAge: 1
        },
        {
          date: '2021-03-31',
          epochDate: 1617229566,
          type: '10-K',
          title: 'Annual Report',
          edgarUrl: 'https://yahoo.brand.edgar-online.com/DisplayFiling.aspx?TabIndex=2&dcn=0001070235-21-000029&nav=1&src=Yahoo',
          maxAge: 1
        },
        {
          date: '2021-03-30',
          epochDate: 1617144825,
          type: '8-K',
          title: 'Results of Operations and Financial Condition',
          edgarUrl: 'https://yahoo.brand.edgar-online.com/DisplayFiling.aspx?TabIndex=2&dcn=0001070235-21-000025&nav=1&src=Yahoo',
          maxAge: 1
        },
        {
          date: '2020-12-18',
          epochDate: 1608327263,
          type: '10-Q',
          title: 'Quarterly Report',
          edgarUrl: 'https://yahoo.brand.edgar-online.com/DisplayFiling.aspx?TabIndex=2&dcn=0001070235-20-000160&nav=1&src=Yahoo',
          maxAge: 1
        },
        {
          date: '2020-12-17',
          epochDate: 1608242905,
          type: '8-K',
          title: 'Results of Operations and Financial Condition',
          edgarUrl: 'https://yahoo.brand.edgar-online.com/DisplayFiling.aspx?TabIndex=2&dcn=0001070235-20-000157&nav=1&src=Yahoo',
          maxAge: 1
        },
        {
          date: '2020-09-24',
          epochDate: 1600984573,
          type: '10-Q',
          title: 'Quarterly Report',
          edgarUrl: 'https://yahoo.brand.edgar-online.com/DisplayFiling.aspx?TabIndex=2&dcn=0001070235-20-000101&nav=1&src=Yahoo',
          maxAge: 1
        },
        {
          date: '2020-09-24',
          epochDate: 1600950612,
          type: '8-K',
          title: 'Results of Operations and Financial Condition',
          edgarUrl: 'https://yahoo.brand.edgar-online.com/DisplayFiling.aspx?TabIndex=2&dcn=0001070235-20-000099&nav=1&src=Yahoo',
          maxAge: 1
        },
        {
          date: '2020-09-02',
          epochDate: 1599070465,
          type: '8-K/A',
          title: 'Entry into a Material Definitive Agreement, Financial Statements and Exhibits',
          edgarUrl: 'https://yahoo.brand.edgar-online.com/DisplayFiling.aspx?TabIndex=2&dcn=0001070235-20-000081&nav=1&src=Yahoo',
          maxAge: 1
        },
        {
          date: '2020-09-02',
          epochDate: 1599044670,
          type: '8-K',
          title: 'Entry into a Material Definitive Agreement, Creation of a Direct Financial Obligation or an Obligation under an Off-Balance Sheet Arrangement of a Registrant, Triggering Events That Accelerate or Increase a Direct Financial Obligation or an Obligation under an Off-Balance Sheet Arrangement, Unregistered Sale of Equity Securities, Financial Statements and Exhibits',
          edgarUrl: 'https://yahoo.brand.edgar-online.com/DisplayFiling.aspx?TabIndex=2&dcn=0001070235-20-000077&nav=1&src=Yahoo',
          maxAge: 1
        },
        {
          date: '2020-08-24',
          epochDate: 1598299853,
          type: '8-K',
          title: 'Other Events, Financial Statements and Exhibits',
          edgarUrl: 'https://yahoo.brand.edgar-online.com/DisplayFiling.aspx?TabIndex=2&dcn=0001070235-20-000075&nav=1&src=Yahoo',
          maxAge: 1
        },
        {
          date: '2020-06-25',
          epochDate: 1593122748,
          type: '10-Q',
          title: 'Quarterly Report',
          edgarUrl: 'https://yahoo.brand.edgar-online.com/DisplayFiling.aspx?TabIndex=2&dcn=0001070235-20-000068&nav=1&src=Yahoo',
          maxAge: 1
        },
        {
          date: '2020-06-24',
          epochDate: 1593037273,
          type: '8-K',
          title: 'Results of Operations and Financial Condition',
          edgarUrl: 'https://yahoo.brand.edgar-online.com/DisplayFiling.aspx?TabIndex=2&dcn=0001070235-20-000064&nav=1&src=Yahoo',
          maxAge: 1
        },
        {
          date: '2020-06-23',
          epochDate: 1592950787,
          type: '8-K',
          title: 'Submission of Matters to a Vote of Security Holders',
          edgarUrl: 'https://yahoo.brand.edgar-online.com/DisplayFiling.aspx?TabIndex=2&dcn=0001070235-20-000060&nav=1&src=Yahoo',
          maxAge: 1
        },
        {
          date: '2020-06-02',
          epochDate: 1591102453,
          type: '8-K',
          title: 'Disclosing Change in Directors or Principal Officers, Financial Statements and Exhibits',
          edgarUrl: 'https://yahoo.brand.edgar-online.com/DisplayFiling.aspx?TabIndex=2&dcn=0001070235-20-000056&nav=1&src=Yahoo',
          maxAge: 1
        },
        {
          date: '2020-04-27',
          epochDate: 1588022465,
          type: '8-K',
          title: "Disclosing Changes in Registrant's Certifying Accountant, Financial Statements and Exhibits",
          edgarUrl: 'https://yahoo.brand.edgar-online.com/DisplayFiling.aspx?TabIndex=2&dcn=0001070235-20-000033&nav=1&src=Yahoo',
          maxAge: 1
        },
        {
          date: '2020-04-07',
          epochDate: 1586253812,
          type: '10-K',
          title: 'Annual Report',
          edgarUrl: 'https://yahoo.brand.edgar-online.com/DisplayFiling.aspx?TabIndex=2&dcn=0001070235-20-000025&nav=1&src=Yahoo',
          maxAge: 1
        },
        {
          date: '2020-03-31',
          epochDate: 1585685644,
          type: '8-K',
          title: 'Disclosing Results of Operations and Financial Condition',
          edgarUrl: 'https://yahoo.brand.edgar-online.com/DisplayFiling.aspx?TabIndex=2&dcn=0001070235-20-000011&nav=1&src=Yahoo',
          maxAge: 1
        }
      ],
      maxAge: 86400
    },
    quoteType: {
      exchange: 'NYQ',
      shortName: 'BlackBerry Limited',
      longName: 'BlackBerry Limited',
      exchangeTimezoneName: 'America/New_York',
      exchangeTimezoneShortName: 'EDT',
      isEsgPopulated: false,
      gmtOffSetMilliseconds: '-14400000',
      quoteType: 'EQUITY',
      symbol: 'BB',
      messageBoardId: 'finmb_399960',
      market: 'us_market'
    },
    calendarEvents: {
      maxAge: 1,
      earnings: {
        earningsDate: [
          {
            raw: 1624320000,
            fmt: '2021-06-22'
          },
          {
            raw: 1624838400,
            fmt: '2021-06-28'
          }
        ],
        earningsAverage: {
          raw: -0.05,
          fmt: '-0.05'
        },
        earningsLow: {
          raw: -0.11,
          fmt: '-0.11'
        },
        earningsHigh: {
          raw: 0,
          fmt: '0.00'
        },
        revenueAverage: {
          raw: 171250000,
          fmt: '171.25M',
          longFmt: '171,250,000'
        },
        revenueLow: {
          raw: 169000000,
          fmt: '169M',
          longFmt: '169,000,000'
        },
        revenueHigh: {
          raw: 176000000,
          fmt: '176M',
          longFmt: '176,000,000'
        }
      },
      exDividendDate: {},
      dividendDate: {}
    },
    summaryDetail: {
      previousClose: {
        raw: 15.77,
        fmt: '15.77'
      },
      regularMarketOpen: {
        raw: 16.48,
        fmt: '16.48'
      },
      twoHundredDayAverage: {
        raw: 9.769333,
        fmt: '9.77'
      },
      trailingAnnualDividendYield: {},
      payoutRatio: {
        raw: 0,
        fmt: '0.00%'
      },
      volume24Hr: {},
      regularMarketDayHigh: {
        raw: 17.17,
        fmt: '17.17'
      },
      navPrice: {},
      averageDailyVolume10Day: {
        raw: 268052380,
        fmt: '268.05M',
        longFmt: '268,052,380'
      },
      totalAssets: {},
      regularMarketPreviousClose: {
        raw: 15.77,
        fmt: '15.77'
      },
      fiftyDayAverage: {
        raw: 9.521143,
        fmt: '9.52'
      },
      trailingAnnualDividendRate: {},
      open: {
        raw: 16.48,
        fmt: '16.48'
      },
      toCurrency: null,
      averageVolume10days: {
        raw: 268052380,
        fmt: '268.05M',
        longFmt: '268,052,380'
      },
      expireDate: {},
      yield: {},
      algorithm: null,
      dividendRate: {},
      exDividendDate: {},
      beta: {
        raw: 0.978445,
        fmt: '0.98'
      },
      circulatingSupply: {},
      startDate: {},
      regularMarketDayLow: {
        raw: 15.25,
        fmt: '15.25'
      },
      priceHint: {
        raw: 2,
        fmt: '2',
        longFmt: '2'
      },
      currency: 'USD',
      regularMarketVolume: {
        raw: 160598924,
        fmt: '160.6M',
        longFmt: '160,598,924'
      },
      lastMarket: null,
      maxSupply: {},
      openInterest: {},
      marketCap: {
        raw: 8929717248,
        fmt: '8.93B',
        longFmt: '8,929,717,248'
      },
      volumeAllCurrencies: {},
      strikePrice: {},
      averageVolume: {
        raw: 33670134,
        fmt: '33.67M',
        longFmt: '33,670,134'
      },
      priceToSalesTrailing12Months: {
        raw: 9.999683,
        fmt: '10.00'
      },
      dayLow: {
        raw: 15.25,
        fmt: '15.25'
      },
      ask: {
        raw: 15.82,
        fmt: '15.82'
      },
      ytdReturn: {},
      askSize: {
        raw: 1000,
        fmt: '1k',
        longFmt: '1,000'
      },
      volume: {
        raw: 160598924,
        fmt: '160.6M',
        longFmt: '160,598,924'
      },
      fiftyTwoWeekHigh: {
        raw: 28.77,
        fmt: '28.77'
      },
      forwardPE: {
        raw: 263.33334,
        fmt: '263.33'
      },
      maxAge: 1,
      fromCurrency: null,
      fiveYearAvgDividendYield: {},
      fiftyTwoWeekLow: {
        raw: 4.37,
        fmt: '4.37'
      },
      bid: {
        raw: 15.77,
        fmt: '15.77'
      },
      tradeable: false,
      dividendYield: {},
      bidSize: {
        raw: 1400,
        fmt: '1.4k',
        longFmt: '1,400'
      },
      dayHigh: {
        raw: 17.17,
        fmt: '17.17'
      }
    },
    symbol: 'BB',
    assetProfile: {
      zip: 'N2K 0A7',
      sector: 'Technology',
      fullTimeEmployees: 3497,
      compensationRisk: 8,
      auditRisk: 1,
      longBusinessSummary: "BlackBerry Limited provides intelligent security software and services to enterprises and governments worldwide. The company leverages artificial intelligence and machine learning to deliver solutions in the areas of cybersecurity, safety, and data privacy; and endpoint security management, encryption, and embedded systems. It offers BlackBerry Spark software platform that includes a suite of security software products and services comprising BlackBerry UEM, BlackBerry Dynamics, and BlackBerry Workspaces solutions; and BlackBerry Spark SDK to promote the evolution of a platform ecosystem by enabling enterprise and independent software vendor developers to integrate the security features of BlackBerry Spark into their own mobile and web applications. The company also provides BlackBerry Internet of Things (IoT) solutions, including BlackBerry QNX, BlackBerry Certicom, BlackBerry Radar, BlackBerry Jarvis, BlackBerry AtHoc, BlackBerry Alert, SecuSUITE, and other IoT applications. As of February 28, 2021, it owned approximately 38,000 worldwide patents and applications. The company has a partnership with the University of Windsor to develop and deliver a cybersecurity curriculum for the university's graduate master's program in applied computing; and an agreement with Amazon Web Services, Inc. to develop and market BlackBerry's IVY, an intelligent vehicle data platform. The company was formerly known as Research In Motion Limited and changed its name to BlackBerry Limited in July 2013. BlackBerry Limited was incorporated in 1984 and is headquartered in Waterloo, Canada.",
      city: 'Waterloo',
      phone: '519 888 7465',
      state: 'ON',
      shareHolderRightsRisk: 4,
      compensationAsOfEpochDate: 1640908800,
      governanceEpochDate: 1622505600,
      boardRisk: 3,
      country: 'Canada',
      companyOfficers: [
        {
          totalPay: {
            raw: 3006608,
            fmt: '3.01M',
            longFmt: '3,006,608'
          },
          exercisedValue: {
            raw: 0,
            fmt: null,
            longFmt: '0'
          },
          yearBorn: 1956,
          name: 'Mr. John S. Chen',
          title: 'Exec. Chairman & CEO',
          maxAge: 1,
          fiscalYear: 2021,
          unexercisedValue: {
            raw: 0,
            fmt: null,
            longFmt: '0'
          },
          age: 64
        },
        {
          maxAge: 1,
          name: 'Mr. Thomas  Eacobacci',
          title: 'Pres, COO & Acting GM of Cyber Security Bus. Unit',
          fiscalYear: 2021,
          totalPay: {
            raw: 628063,
            fmt: '628.06k',
            longFmt: '628,063'
          },
          exercisedValue: {
            raw: 0,
            fmt: null,
            longFmt: '0'
          },
          unexercisedValue: {
            raw: 0,
            fmt: null,
            longFmt: '0'
          }
        },
        {
          maxAge: 1,
          name: 'Mr. Steve  Rai',
          title: 'Chief Financial Officer',
          fiscalYear: 2021,
          totalPay: {
            raw: 488405,
            fmt: '488.4k',
            longFmt: '488,405'
          },
          exercisedValue: {
            raw: 0,
            fmt: null,
            longFmt: '0'
          },
          unexercisedValue: {
            raw: 0,
            fmt: null,
            longFmt: '0'
          }
        },
        {
          totalPay: {
            raw: 625146,
            fmt: '625.15k',
            longFmt: '625,146'
          },
          exercisedValue: {
            raw: 0,
            fmt: null,
            longFmt: '0'
          },
          yearBorn: 1957,
          name: 'Mr. Sai Yuen Ho',
          title: 'Exec. VP of BlackBerry Spark Group Products & Value Added Solutions',
          maxAge: 1,
          fiscalYear: 2021,
          unexercisedValue: {
            raw: 0,
            fmt: null,
            longFmt: '0'
          },
          age: 63
        },
        {
          maxAge: 1,
          name: 'Ms. Marjorie  Dickman',
          title: 'Chief Gov. Affairs & Public Policy Officer',
          fiscalYear: 2021,
          totalPay: {
            raw: 713251,
            fmt: '713.25k',
            longFmt: '713,251'
          },
          exercisedValue: {
            raw: 0,
            fmt: null,
            longFmt: '0'
          },
          unexercisedValue: {
            raw: 0,
            fmt: null,
            longFmt: '0'
          }
        },
        {
          maxAge: 1,
          name: 'Mr. Charles  Eagan',
          title: 'Chief Technology Officer',
          exercisedValue: {
            raw: 0,
            fmt: null,
            longFmt: '0'
          },
          unexercisedValue: {
            raw: 0,
            fmt: null,
            longFmt: '0'
          }
        },
        {
          maxAge: 1,
          name: 'Mr. Christopher  Hummel',
          title: 'Chief Information Officer',
          exercisedValue: {
            raw: 0,
            fmt: null,
            longFmt: '0'
          },
          unexercisedValue: {
            raw: 0,
            fmt: null,
            longFmt: '0'
          }
        },
        {
          maxAge: 1,
          name: 'Mr. Randall  Cook',
          title: 'Chief Legal Officer, Chief Compliance Officer & Chief Risk Officer',
          fiscalYear: 2020,
          exercisedValue: {
            raw: 0,
            fmt: null,
            longFmt: '0'
          },
          unexercisedValue: {
            raw: 0,
            fmt: null,
            longFmt: '0'
          }
        },
        {
          maxAge: 1,
          name: 'Mr. Mark  Wilson',
          title: 'Chief Marketing Officer',
          exercisedValue: {
            raw: 0,
            fmt: null,
            longFmt: '0'
          },
          unexercisedValue: {
            raw: 0,
            fmt: null,
            longFmt: '0'
          }
        },
        {
          maxAge: 1,
          name: 'Mr. Vito  Giallorenzo',
          title: 'Sr. VP of Corp. Devel. & COO of BlackBerry Technology Solutions',
          exercisedValue: {
            raw: 0,
            fmt: null,
            longFmt: '0'
          },
          unexercisedValue: {
            raw: 0,
            fmt: null,
            longFmt: '0'
          }
        }
      ],
      website: 'http://www.blackberry.com',
      maxAge: 86400,
      overallRisk: 4,
      address1: '2200 University Avenue East',
      industry: 'Software—Infrastructure'
    },
    pageViews: {
      shortTermTrend: 'UP',
      midTermTrend: 'UP',
      longTermTrend: 'UP',
      maxAge: 1
    }
  },
  NOK: {
    financialsTemplate: {
      code: 'N',
      maxAge: 1
    },
    price: {
      quoteSourceName: 'Nasdaq Real Time Price',
      regularMarketOpen: {
        raw: 5.57,
        fmt: '5.57'
      },
      averageDailyVolume3Month: {
        raw: 41621920,
        fmt: '41.62M',
        longFmt: '41,621,920'
      },
      exchange: 'NYQ',
      regularMarketTime: 1623182427,
      volume24Hr: {},
      regularMarketDayHigh: {
        raw: 5.69,
        fmt: '5.69'
      },
      shortName: 'Nokia Corporation Sponsored',
      averageDailyVolume10Day: {
        raw: 66132680,
        fmt: '66.13M',
        longFmt: '66,132,680'
      },
      longName: 'Nokia Corporation',
      regularMarketChange: {
        raw: -0.0300002,
        fmt: '-0.03'
      },
      currencySymbol: '$',
      regularMarketPreviousClose: {
        raw: 5.61,
        fmt: '5.61'
      },
      postMarketTime: 1623193173,
      preMarketPrice: {
        raw: 5.565,
        fmt: '5.57'
      },
      preMarketTime: 1623158999,
      exchangeDataDelayedBy: 0,
      toCurrency: null,
      postMarketChange: {
        raw: -0.029999733,
        fmt: '-0.03'
      },
      postMarketPrice: {
        raw: 5.55,
        fmt: '5.55'
      },
      exchangeName: 'NYSE',
      preMarketChange: {
        raw: -0.0450001,
        fmt: '-0.05'
      },
      circulatingSupply: {},
      regularMarketDayLow: {
        raw: 5.54,
        fmt: '5.54'
      },
      priceHint: {
        raw: 2,
        fmt: '2',
        longFmt: '2'
      },
      currency: 'USD',
      regularMarketPrice: {
        raw: 5.58,
        fmt: '5.58'
      },
      regularMarketVolume: {
        raw: 48491060,
        fmt: '48.49M',
        longFmt: '48,491,060.00'
      },
      lastMarket: null,
      regularMarketSource: 'FREE_REALTIME',
      openInterest: {},
      marketState: 'POST',
      underlyingSymbol: null,
      marketCap: {
        raw: 30855948288,
        fmt: '30.86B',
        longFmt: '30,855,948,288.00'
      },
      quoteType: 'EQUITY',
      preMarketChangePercent: {
        raw: -0.0080214,
        fmt: '-0.80%'
      },
      volumeAllCurrencies: {},
      postMarketSource: 'FREE_REALTIME',
      strikePrice: {},
      symbol: 'NOK',
      postMarketChangePercent: {
        raw: -0.005376296,
        fmt: '-0.54%'
      },
      preMarketSource: 'FREE_REALTIME',
      maxAge: 1,
      fromCurrency: null,
      regularMarketChangePercent: {
        raw: -0.00534763,
        fmt: '-0.53%'
      }
    },
    secFilings: {},
    quoteType: {
      exchange: 'NYQ',
      shortName: 'Nokia Corporation Sponsored',
      longName: 'Nokia Corporation',
      exchangeTimezoneName: 'America/New_York',
      exchangeTimezoneShortName: 'EDT',
      isEsgPopulated: false,
      gmtOffSetMilliseconds: '-14400000',
      quoteType: 'EQUITY',
      symbol: 'NOK',
      messageBoardId: 'finmb_205573',
      market: 'us_market'
    },
    calendarEvents: {
      maxAge: 1,
      earnings: {
        earningsDate: [],
        earningsAverage: {
          raw: 0.05,
          fmt: '0.05'
        },
        earningsLow: {
          raw: 0.03,
          fmt: '0.03'
        },
        earningsHigh: {
          raw: 0.07,
          fmt: '0.07'
        },
        revenueAverage: {
          raw: 6215800000,
          fmt: '6.22B',
          longFmt: '6,215,800,000'
        },
        revenueLow: {
          raw: 5998000000,
          fmt: '6B',
          longFmt: '5,998,000,000'
        },
        revenueHigh: {
          raw: 6372760000,
          fmt: '6.37B',
          longFmt: '6,372,760,000'
        }
      },
      exDividendDate: {
        raw: 1564358400,
        fmt: '2019-07-29'
      },
      dividendDate: {
        raw: 1565654400,
        fmt: '2019-08-13'
      }
    },
    summaryDetail: {
      previousClose: {
        raw: 5.61,
        fmt: '5.61'
      },
      regularMarketOpen: {
        raw: 5.57,
        fmt: '5.57'
      },
      twoHundredDayAverage: {
        raw: 4.3034816,
        fmt: '4.30'
      },
      trailingAnnualDividendYield: {
        raw: 0.03939394,
        fmt: '3.94%'
      },
      payoutRatio: {
        raw: 0,
        fmt: '0.00%'
      },
      volume24Hr: {},
      regularMarketDayHigh: {
        raw: 5.69,
        fmt: '5.69'
      },
      navPrice: {},
      averageDailyVolume10Day: {
        raw: 66132680,
        fmt: '66.13M',
        longFmt: '66,132,680'
      },
      totalAssets: {},
      regularMarketPreviousClose: {
        raw: 5.61,
        fmt: '5.61'
      },
      fiftyDayAverage: {
        raw: 4.8271427,
        fmt: '4.83'
      },
      trailingAnnualDividendRate: {
        raw: 0.221,
        fmt: '0.22'
      },
      open: {
        raw: 5.57,
        fmt: '5.57'
      },
      toCurrency: null,
      averageVolume10days: {
        raw: 66132680,
        fmt: '66.13M',
        longFmt: '66,132,680'
      },
      expireDate: {},
      yield: {},
      algorithm: null,
      dividendRate: {},
      exDividendDate: {
        raw: 1564358400,
        fmt: '2019-07-29'
      },
      beta: {
        raw: 0.561441,
        fmt: '0.56'
      },
      circulatingSupply: {},
      startDate: {},
      regularMarketDayLow: {
        raw: 5.54,
        fmt: '5.54'
      },
      priceHint: {
        raw: 2,
        fmt: '2',
        longFmt: '2'
      },
      currency: 'USD',
      regularMarketVolume: {
        raw: 48491060,
        fmt: '48.49M',
        longFmt: '48,491,060'
      },
      lastMarket: null,
      maxSupply: {},
      openInterest: {},
      marketCap: {
        raw: 30855948288,
        fmt: '30.86B',
        longFmt: '30,855,948,288'
      },
      volumeAllCurrencies: {},
      strikePrice: {},
      averageVolume: {
        raw: 41621920,
        fmt: '41.62M',
        longFmt: '41,621,920'
      },
      priceToSalesTrailing12Months: {
        raw: 1.4015875,
        fmt: '1.40'
      },
      dayLow: {
        raw: 5.54,
        fmt: '5.54'
      },
      ask: {
        raw: 5.57,
        fmt: '5.57'
      },
      ytdReturn: {},
      askSize: {
        raw: 45100,
        fmt: '45.1k',
        longFmt: '45,100'
      },
      volume: {
        raw: 48491060,
        fmt: '48.49M',
        longFmt: '48,491,060'
      },
      fiftyTwoWeekHigh: {
        raw: 9.79,
        fmt: '9.79'
      },
      forwardPE: {
        raw: 18,
        fmt: '18.00'
      },
      maxAge: 1,
      fromCurrency: null,
      fiveYearAvgDividendYield: {},
      fiftyTwoWeekLow: {
        raw: 3.21,
        fmt: '3.21'
      },
      bid: {
        raw: 5.56,
        fmt: '5.56'
      },
      tradeable: false,
      dividendYield: {},
      bidSize: {
        raw: 39400,
        fmt: '39.4k',
        longFmt: '39,400'
      },
      dayHigh: {
        raw: 5.69,
        fmt: '5.69'
      }
    },
    symbol: 'NOK',
    assetProfile: {
      zip: '02610',
      sector: 'Technology',
      fullTimeEmployees: 92039,
      compensationRisk: 8,
      auditRisk: 1,
      longBusinessSummary: 'Nokia Corporation provides mobile and fixed network solutions worldwide. The company operates through four segments: Mobile Networks, Network Infrastructure, Cloud and Network Services, and Nokia Technologies. It focuses on mobile radio including macro radio, small cells, and cloud native radio solutions for communications service providers and enterprises; and provides network planning and optimization, network implementation, and systems integration, as well as company-wide managed services. The company also offers fixed networking solutions, such as copper and fiber access products, solutions, and services. In addition, it provides network infrastructure and professional services for mobile networks; and managed services for the fixed, mobile, Internet protocol (IP), and optical domains. Further, the company offers network planning, implementation, operation, and maintenance services. Additionally, it provides IP/optical networking solutions, including IP routing and optical transport systems, software, and services; software solutions, such as customer experience management, network operations and management, communications and collaborations, and policy and charging, as well as cloud, IoT, security, and analytics platforms; and submarine networks and radiofrequency systems. Nokia Corporation was founded in 1865 and is headquartered in Espoo, Finland.',
      city: 'Espoo',
      phone: '358 1044 88000',
      shareHolderRightsRisk: 1,
      compensationAsOfEpochDate: 1609372800,
      governanceEpochDate: 1622505600,
      boardRisk: 1,
      country: 'Finland',
      companyOfficers: [
        {
          totalPay: {
            raw: 2535330,
            fmt: '2.54M',
            longFmt: '2,535,330'
          },
          exercisedValue: {
            raw: 0,
            fmt: null,
            longFmt: '0'
          },
          yearBorn: 1963,
          name: 'Mr. Pekka Ilmari Lundmark',
          title: 'Pres & CEO',
          maxAge: 1,
          fiscalYear: 2020,
          unexercisedValue: {
            raw: 0,
            fmt: null,
            longFmt: '0'
          },
          age: 57
        },
        {
          maxAge: 1,
          name: 'Mr. Marco  Wiren',
          age: 54,
          title: 'Chief Financial Officer',
          yearBorn: 1966,
          exercisedValue: {
            raw: 0,
            fmt: null,
            longFmt: '0'
          },
          unexercisedValue: {
            raw: 0,
            fmt: null,
            longFmt: '0'
          }
        },
        {
          maxAge: 1,
          name: 'Mr. Nishant  Batra',
          age: 42,
          title: 'Chief Strategy & Technology Officer',
          yearBorn: 1978,
          exercisedValue: {
            raw: 0,
            fmt: null,
            longFmt: '0'
          },
          unexercisedValue: {
            raw: 0,
            fmt: null,
            longFmt: '0'
          }
        },
        {
          maxAge: 1,
          name: 'Mr. David Terence Mulholland CFA',
          title: 'Head of Investor Relations',
          exercisedValue: {
            raw: 0,
            fmt: null,
            longFmt: '0'
          },
          unexercisedValue: {
            raw: 0,
            fmt: null,
            longFmt: '0'
          }
        },
        {
          maxAge: 1,
          name: 'Mr. Nassib  Abou-Khalil',
          age: 48,
          title: 'Chief Legal Officer',
          yearBorn: 1972,
          exercisedValue: {
            raw: 0,
            fmt: null,
            longFmt: '0'
          },
          unexercisedValue: {
            raw: 0,
            fmt: null,
            longFmt: '0'
          }
        },
        {
          maxAge: 1,
          name: 'Katja  Antila',
          title: 'Head of Media Relations',
          exercisedValue: {
            raw: 0,
            fmt: null,
            longFmt: '0'
          },
          unexercisedValue: {
            raw: 0,
            fmt: null,
            longFmt: '0'
          }
        },
        {
          maxAge: 1,
          name: 'Ms. Stephanie  Werner-Dietz',
          age: 48,
          title: 'Chief People Officer',
          yearBorn: 1972,
          exercisedValue: {
            raw: 0,
            fmt: null,
            longFmt: '0'
          },
          unexercisedValue: {
            raw: 0,
            fmt: null,
            longFmt: '0'
          }
        },
        {
          maxAge: 1,
          name: 'Mr. Sergei  Khraby',
          title: 'Head of Belarussian office',
          exercisedValue: {
            raw: 0,
            fmt: null,
            longFmt: '0'
          },
          unexercisedValue: {
            raw: 0,
            fmt: null,
            longFmt: '0'
          }
        },
        {
          maxAge: 1,
          name: 'Ms. Maria Rosaria Varsellona J.D., L.L.B.',
          age: 50,
          title: 'Exec. Officer',
          yearBorn: 1970,
          exercisedValue: {
            raw: 0,
            fmt: null,
            longFmt: '0'
          },
          unexercisedValue: {
            raw: 0,
            fmt: null,
            longFmt: '0'
          }
        },
        {
          maxAge: 1,
          name: 'Qais  Esrawee',
          title: 'Head of Sub-Region, Lower Gulf, Afghanistan & Pakistan - Networks Bus.',
          exercisedValue: {
            raw: 0,
            fmt: null,
            longFmt: '0'
          },
          unexercisedValue: {
            raw: 0,
            fmt: null,
            longFmt: '0'
          }
        }
      ],
      website: 'http://www.nokia.com',
      maxAge: 86400,
      overallRisk: 1,
      address1: 'Karakaari 7',
      fax: '358 1044 81002',
      industry: 'Communication Equipment'
    },
    pageViews: {
      shortTermTrend: 'DOWN',
      midTermTrend: 'UP',
      longTermTrend: 'UP',
      maxAge: 1
    }
  },
  TSLA: {
    financialsTemplate: {
      code: 'N',
      maxAge: 1
    },
    price: {
      quoteSourceName: 'Nasdaq Real Time Price',
      regularMarketOpen: {
        raw: 623.01,
        fmt: '623.01'
      },
      averageDailyVolume3Month: {
        raw: 33246148,
        fmt: '33.25M',
        longFmt: '33,246,148'
      },
      exchange: 'NMS',
      regularMarketTime: 1623182403,
      volume24Hr: {},
      regularMarketDayHigh: {
        raw: 623.09,
        fmt: '623.09'
      },
      shortName: 'Tesla, Inc.',
      averageDailyVolume10Day: {
        raw: 23595600,
        fmt: '23.6M',
        longFmt: '23,595,600'
      },
      longName: 'Tesla, Inc.',
      regularMarketChange: {
        raw: -1.539978,
        fmt: '-1.54'
      },
      currencySymbol: '$',
      regularMarketPreviousClose: {
        raw: 605.13,
        fmt: '605.13'
      },
      postMarketTime: 1623193194,
      preMarketPrice: {
        raw: 622.98,
        fmt: '622.98'
      },
      preMarketTime: 1623158999,
      exchangeDataDelayedBy: 0,
      toCurrency: null,
      postMarketChange: {
        raw: -2.290039,
        fmt: '-2.29'
      },
      postMarketPrice: {
        raw: 601.3,
        fmt: '601.30'
      },
      exchangeName: 'NasdaqGS',
      preMarketChange: {
        raw: 17.85,
        fmt: '17.85'
      },
      circulatingSupply: {},
      regularMarketDayLow: {
        raw: 595.5,
        fmt: '595.50'
      },
      priceHint: {
        raw: 2,
        fmt: '2',
        longFmt: '2'
      },
      currency: 'USD',
      regularMarketPrice: {
        raw: 603.59,
        fmt: '603.59'
      },
      regularMarketVolume: {
        raw: 25886766,
        fmt: '25.89M',
        longFmt: '25,886,766.00'
      },
      lastMarket: null,
      regularMarketSource: 'FREE_REALTIME',
      openInterest: {},
      marketState: 'POST',
      underlyingSymbol: null,
      marketCap: {
        raw: 581456363520,
        fmt: '581.46B',
        longFmt: '581,456,363,520.00'
      },
      quoteType: 'EQUITY',
      preMarketChangePercent: {
        raw: 0.0294978,
        fmt: '2.95%'
      },
      volumeAllCurrencies: {},
      postMarketSource: 'FREE_REALTIME',
      strikePrice: {},
      symbol: 'TSLA',
      postMarketChangePercent: {
        raw: -0.0037940305,
        fmt: '-0.38%'
      },
      preMarketSource: 'FREE_REALTIME',
      maxAge: 1,
      fromCurrency: null,
      regularMarketChangePercent: {
        raw: -0.0025448713,
        fmt: '-0.25%'
      }
    },
    secFilings: {
      filings: [
        {
          date: '2021-06-07',
          epochDate: 1623103832,
          type: '8-K',
          title: 'Change in Directors or Principal Officers',
          edgarUrl: 'https://yahoo.brand.edgar-online.com/DisplayFiling.aspx?TabIndex=2&dcn=0001564590-21-031976&nav=1&src=Yahoo',
          maxAge: 1
        },
        {
          date: '2021-04-28',
          epochDate: 1619608413,
          type: '10-Q',
          title: 'Quarterly Report',
          edgarUrl: 'https://yahoo.brand.edgar-online.com/DisplayFiling.aspx?TabIndex=2&dcn=0000950170-21-000046&nav=1&src=Yahoo',
          maxAge: 1
        },
        {
          date: '2021-04-26',
          epochDate: 1619474098,
          type: '8-K',
          title: 'Results of Operations and Financial Condition, Financial Statements and Exhibits',
          edgarUrl: 'https://yahoo.brand.edgar-online.com/DisplayFiling.aspx?TabIndex=2&dcn=0001564590-21-020558&nav=1&src=Yahoo',
          maxAge: 1
        },
        {
          date: '2021-04-02',
          epochDate: 1617370735,
          type: '8-K',
          title: 'Regulation FD Disclosure, Financial Statements and Exhibits',
          edgarUrl: 'https://yahoo.brand.edgar-online.com/DisplayFiling.aspx?TabIndex=2&dcn=0001564590-21-017443&nav=1&src=Yahoo',
          maxAge: 1
        },
        {
          date: '2021-03-15',
          epochDate: 1615807727,
          type: '8-K',
          title: 'Change in Directors or Principal Officers',
          edgarUrl: 'https://yahoo.brand.edgar-online.com/DisplayFiling.aspx?TabIndex=2&dcn=0001564590-21-012962&nav=1&src=Yahoo',
          maxAge: 1
        },
        {
          date: '2021-02-08',
          epochDate: 1612787341,
          type: '10-K',
          title: 'Annual Report',
          edgarUrl: 'https://yahoo.brand.edgar-online.com/DisplayFiling.aspx?TabIndex=2&dcn=0001564590-21-004599&nav=1&src=Yahoo',
          maxAge: 1
        },
        {
          date: '2021-01-27',
          epochDate: 1611785563,
          type: '8-K',
          title: 'Results of Operations and Financial Condition, Financial Statements and Exhibits',
          edgarUrl: 'https://yahoo.brand.edgar-online.com/DisplayFiling.aspx?TabIndex=2&dcn=0001564590-21-002645&nav=1&src=Yahoo',
          maxAge: 1
        },
        {
          date: '2021-01-04',
          epochDate: 1609759369,
          type: '8-K',
          title: 'Entry into a Material Definitive Agreement',
          edgarUrl: 'https://yahoo.brand.edgar-online.com/DisplayFiling.aspx?TabIndex=2&dcn=0001564590-21-000010&nav=1&src=Yahoo',
          maxAge: 1
        },
        {
          date: '2020-12-10',
          epochDate: 1607634906,
          type: '8-K',
          title: 'Other Events',
          edgarUrl: 'https://yahoo.brand.edgar-online.com/DisplayFiling.aspx?TabIndex=2&dcn=0001564590-20-056725&nav=1&src=Yahoo',
          maxAge: 1
        },
        {
          date: '2020-12-08',
          epochDate: 1607425613,
          type: '8-K',
          title: 'Entry into a Material Definitive Agreement, Other Events, Financial Statements and Exhibits',
          edgarUrl: 'https://yahoo.brand.edgar-online.com/DisplayFiling.aspx?TabIndex=2&dcn=0001193125-20-312194&nav=1&src=Yahoo',
          maxAge: 1
        },
        {
          date: '2020-10-26',
          epochDate: 1603710515,
          type: '10-Q',
          title: 'Quarterly Report',
          edgarUrl: 'https://yahoo.brand.edgar-online.com/DisplayFiling.aspx?TabIndex=2&dcn=0001564590-20-047486&nav=1&src=Yahoo',
          maxAge: 1
        },
        {
          date: '2020-10-21',
          epochDate: 1603316614,
          type: '8-K',
          title: 'Results of Operations and Financial Condition, Financial Statements and Exhibits',
          edgarUrl: 'https://yahoo.brand.edgar-online.com/DisplayFiling.aspx?TabIndex=2&dcn=0001564590-20-047108&nav=1&src=Yahoo',
          maxAge: 1
        },
        {
          date: '2020-10-02',
          epochDate: 1601643703,
          type: '8-K',
          title: 'Regulation FD Disclosure, Financial Statements and Exhibits',
          edgarUrl: 'https://yahoo.brand.edgar-online.com/DisplayFiling.aspx?TabIndex=2&dcn=0001564590-20-045592&nav=1&src=Yahoo',
          maxAge: 1
        },
        {
          date: '2020-09-24',
          epochDate: 1600985768,
          type: '8-K',
          title: 'Submission of Matters to a Vote of Security Holders',
          edgarUrl: 'https://yahoo.brand.edgar-online.com/DisplayFiling.aspx?TabIndex=2&dcn=0001564590-20-044548&nav=1&src=Yahoo',
          maxAge: 1
        },
        {
          date: '2020-09-08',
          epochDate: 1599563876,
          type: '8-K',
          title: 'Other Events',
          edgarUrl: 'https://yahoo.brand.edgar-online.com/DisplayFiling.aspx?TabIndex=2&dcn=0001564590-20-042696&nav=1&src=Yahoo',
          maxAge: 1
        },
        {
          date: '2020-09-01',
          epochDate: 1598962360,
          type: '8-K',
          title: 'Entry into a Material Definitive Agreement, Termination of a Material Definitive Agreement, Other Events, Financial Statements and Exhibits',
          edgarUrl: 'https://yahoo.brand.edgar-online.com/DisplayFiling.aspx?TabIndex=2&dcn=0001193125-20-236678&nav=1&src=Yahoo',
          maxAge: 1
        },
        {
          date: '2020-08-11',
          epochDate: 1597183703,
          type: '8-K',
          title: 'Other Events, Financial Statements and Exhibits',
          edgarUrl: 'https://yahoo.brand.edgar-online.com/DisplayFiling.aspx?TabIndex=2&dcn=0001564590-20-039353&nav=1&src=Yahoo',
          maxAge: 1
        },
        {
          date: '2020-07-28',
          epochDate: 1595934544,
          type: '10-Q',
          title: 'Quarterly Report',
          edgarUrl: 'https://yahoo.brand.edgar-online.com/DisplayFiling.aspx?TabIndex=2&dcn=0001564590-20-033670&nav=1&src=Yahoo',
          maxAge: 1
        },
        {
          date: '2020-07-02',
          epochDate: 1593717800,
          type: '8-K',
          title: 'Regulation FD Disclosure, Financial Statements and Exhibits',
          edgarUrl: 'https://yahoo.brand.edgar-online.com/DisplayFiling.aspx?TabIndex=2&dcn=0001564590-20-031568&nav=1&src=Yahoo',
          maxAge: 1
        },
        {
          date: '2020-06-30',
          epochDate: 1593555807,
          type: '8-K',
          title: 'Entry into a Material Definitive Agreement',
          edgarUrl: 'https://yahoo.brand.edgar-online.com/DisplayFiling.aspx?TabIndex=2&dcn=0001564590-20-031314&nav=1&src=Yahoo',
          maxAge: 1
        },
        {
          date: '2020-06-16',
          epochDate: 1592342735,
          type: '8-K',
          title: 'Entry into a Material Definitive Agreement',
          edgarUrl: 'https://yahoo.brand.edgar-online.com/DisplayFiling.aspx?TabIndex=2&dcn=0001564590-20-029536&nav=1&src=Yahoo',
          maxAge: 1
        },
        {
          date: '2020-05-08',
          epochDate: 1588972512,
          type: '8-K',
          title: 'Disclosing Entry into a Material Definitive Agreement',
          edgarUrl: 'https://yahoo.brand.edgar-online.com/DisplayFiling.aspx?TabIndex=2&dcn=0001564590-20-023655&nav=1&src=Yahoo',
          maxAge: 1
        },
        {
          date: '2020-05-06',
          epochDate: 1588800234,
          type: '8-K',
          title: 'Disclosing Other Events, Financial Statements and Exhibits',
          edgarUrl: 'https://yahoo.brand.edgar-online.com/DisplayFiling.aspx?TabIndex=2&dcn=0001564590-20-022062&nav=1&src=Yahoo',
          maxAge: 1
        },
        {
          date: '2020-04-30',
          epochDate: 1588242623,
          type: '10-Q',
          title: 'Quarterly Report',
          edgarUrl: 'https://yahoo.brand.edgar-online.com/DisplayFiling.aspx?TabIndex=2&dcn=0001564590-20-019931&nav=1&src=Yahoo',
          maxAge: 1
        },
        {
          date: '2020-04-29',
          epochDate: 1588193937,
          type: '8-K',
          title: 'Disclosing Results of Operations and Financial Condition, Financial Statements and Exhibits',
          edgarUrl: 'https://yahoo.brand.edgar-online.com/DisplayFiling.aspx?TabIndex=2&dcn=0001564590-20-019776&nav=1&src=Yahoo',
          maxAge: 1
        },
        {
          date: '2020-04-23',
          epochDate: 1587672695,
          type: '8-K',
          title: 'Disclosing Change in Directors or Principal Officers, Financial Statements and Exhibits',
          edgarUrl: 'https://yahoo.brand.edgar-online.com/DisplayFiling.aspx?TabIndex=2&dcn=0001564590-20-018196&nav=1&src=Yahoo',
          maxAge: 1
        },
        {
          date: '2020-04-02',
          epochDate: 1585858230,
          type: '8-K',
          title: 'Disclosing Regulation FD Disclosure, Financial Statements and Exhibits',
          edgarUrl: 'https://yahoo.brand.edgar-online.com/DisplayFiling.aspx?TabIndex=2&dcn=0001564590-20-014992&nav=1&src=Yahoo',
          maxAge: 1
        },
        {
          date: '2020-03-19',
          epochDate: 1584651422,
          type: '8-K',
          title: 'Disclosing Regulation FD Disclosure, Financial Statements and Exhibits',
          edgarUrl: 'https://yahoo.brand.edgar-online.com/DisplayFiling.aspx?TabIndex=2&dcn=0001564590-20-011823&nav=1&src=Yahoo',
          maxAge: 1
        },
        {
          date: '2020-02-19',
          epochDate: 1582147038,
          type: '8-K',
          title: 'Disclosing Entry into a Material Definitive Agreement, Material Modification to Rights of Securi',
          edgarUrl: 'https://yahoo.brand.edgar-online.com/DisplayFiling.aspx?TabIndex=2&dcn=0001564590-20-005288&nav=1&src=Yahoo',
          maxAge: 1
        },
        {
          date: '2020-02-13',
          epochDate: 1581596058,
          type: '10-K',
          title: 'Annual Report',
          edgarUrl: 'https://yahoo.brand.edgar-online.com/DisplayFiling.aspx?TabIndex=2&dcn=0001564590-20-004475&nav=1&src=Yahoo',
          maxAge: 1
        },
        {
          date: '2020-01-29',
          epochDate: 1580336035,
          type: '8-K',
          title: 'Disclosing Results of Operations and Financial Condition, Financial Statements and Exhibits',
          edgarUrl: 'https://yahoo.brand.edgar-online.com/DisplayFiling.aspx?TabIndex=2&dcn=0001564590-20-002489&nav=1&src=Yahoo',
          maxAge: 1
        },
        {
          date: '2020-01-03',
          epochDate: 1578057760,
          type: '8-K',
          title: 'Disclosing Regulation FD Disclosure, Financial Statements and Exhibits',
          edgarUrl: 'https://yahoo.brand.edgar-online.com/DisplayFiling.aspx?TabIndex=2&dcn=0001564590-20-000161&nav=1&src=Yahoo',
          maxAge: 1
        },
        {
          date: '2019-12-26',
          epochDate: 1577397754,
          type: '8-K',
          title: 'Disclosing Creation of a Direct Financial Obligation or an Obligation under an Off-Balance Sheet',
          edgarUrl: 'https://yahoo.brand.edgar-online.com/DisplayFiling.aspx?TabIndex=2&dcn=0001564590-19-046961&nav=1&src=Yahoo',
          maxAge: 1
        },
        {
          date: '2019-10-29',
          epochDate: 1572348324,
          type: '10-Q',
          title: 'Quarterly Report',
          edgarUrl: 'https://yahoo.brand.edgar-online.com/DisplayFiling.aspx?TabIndex=2&dcn=0001564590-19-038256&nav=1&src=Yahoo',
          maxAge: 1
        },
        {
          date: '2019-10-23',
          epochDate: 1571866071,
          type: '8-K',
          title: 'Disclosing Results of Operations and Financial Condition, Financial Statements and Exhibits',
          edgarUrl: 'https://yahoo.brand.edgar-online.com/DisplayFiling.aspx?TabIndex=2&dcn=0001564590-19-037581&nav=1&src=Yahoo',
          maxAge: 1
        },
        {
          date: '2019-10-02',
          epochDate: 1570051635,
          type: '8-K',
          title: 'Disclosing Creation of a Direct Financial Obligation or an Obligation under an Off-Balance Sheet',
          edgarUrl: 'https://yahoo.brand.edgar-online.com/DisplayFiling.aspx?TabIndex=2&dcn=0001564590-19-036274&nav=1&src=Yahoo',
          maxAge: 1
        },
        {
          date: '2019-08-16',
          epochDate: 1565989457,
          type: '8-K',
          title: 'Disclosing Entry into a Material Definitive Agreement, Creation of a Direct Financial Obligation',
          edgarUrl: 'https://yahoo.brand.edgar-online.com/DisplayFiling.aspx?TabIndex=2&dcn=0001564590-19-032484&nav=1&src=Yahoo',
          maxAge: 1
        },
        {
          date: '2019-07-29',
          epochDate: 1564395743,
          type: '10-Q',
          title: 'Quarterly Report',
          edgarUrl: 'https://yahoo.brand.edgar-online.com/DisplayFiling.aspx?TabIndex=2&dcn=0001564590-19-026445&nav=1&src=Yahoo',
          maxAge: 1
        },
        {
          date: '2019-07-24',
          epochDate: 1564001858,
          type: '8-K',
          title: 'Disclosing Results of Operations and Financial Condition, Financial Statements and Exhibits',
          edgarUrl: 'https://yahoo.brand.edgar-online.com/DisplayFiling.aspx?TabIndex=2&dcn=0001564590-19-025855&nav=1&src=Yahoo',
          maxAge: 1
        },
        {
          date: '2019-07-02',
          epochDate: 1562099472,
          type: '8-K',
          title: 'Disclosing Regulation FD Disclosure, Financial Statements and Exhibits',
          edgarUrl: 'https://yahoo.brand.edgar-online.com/DisplayFiling.aspx?TabIndex=2&dcn=0001564590-19-024414&nav=1&src=Yahoo',
          maxAge: 1
        },
        {
          date: '2019-06-12',
          epochDate: 1560375003,
          type: '8-K',
          title: 'Disclosing Change in Directors or Principal Officers, Submission of Matters to a Vote of Securit',
          edgarUrl: 'https://yahoo.brand.edgar-online.com/DisplayFiling.aspx?TabIndex=2&dcn=0001564590-19-022354&nav=1&src=Yahoo',
          maxAge: 1
        }
      ],
      maxAge: 86400
    },
    quoteType: {
      exchange: 'NMS',
      shortName: 'Tesla, Inc.',
      longName: 'Tesla, Inc.',
      exchangeTimezoneName: 'America/New_York',
      exchangeTimezoneShortName: 'EDT',
      isEsgPopulated: false,
      gmtOffSetMilliseconds: '-14400000',
      quoteType: 'EQUITY',
      symbol: 'TSLA',
      messageBoardId: 'finmb_27444752',
      market: 'us_market'
    },
    calendarEvents: {
      maxAge: 1,
      earnings: {
        earningsDate: [
          {
            raw: 1626739200,
            fmt: '2021-07-20'
          },
          {
            raw: 1627257600,
            fmt: '2021-07-26'
          }
        ],
        earningsAverage: {
          raw: 0.96,
          fmt: '0.96'
        },
        earningsLow: {
          raw: 0.62,
          fmt: '0.62'
        },
        earningsHigh: {
          raw: 1.26,
          fmt: '1.26'
        },
        revenueAverage: {
          raw: 11232800000,
          fmt: '11.23B',
          longFmt: '11,232,800,000'
        },
        revenueLow: {
          raw: 9500000000,
          fmt: '9.5B',
          longFmt: '9,500,000,000'
        },
        revenueHigh: {
          raw: 12826900000,
          fmt: '12.83B',
          longFmt: '12,826,900,000'
        }
      },
      exDividendDate: {},
      dividendDate: {}
    },
    summaryDetail: {
      previousClose: {
        raw: 605.13,
        fmt: '605.13'
      },
      regularMarketOpen: {
        raw: 623.01,
        fmt: '623.01'
      },
      twoHundredDayAverage: {
        raw: 692.8565,
        fmt: '692.86'
      },
      trailingAnnualDividendYield: {},
      payoutRatio: {
        raw: 0,
        fmt: '0.00%'
      },
      volume24Hr: {},
      regularMarketDayHigh: {
        raw: 623.09,
        fmt: '623.09'
      },
      navPrice: {},
      averageDailyVolume10Day: {
        raw: 23595600,
        fmt: '23.6M',
        longFmt: '23,595,600'
      },
      totalAssets: {},
      regularMarketPreviousClose: {
        raw: 605.13,
        fmt: '605.13'
      },
      fiftyDayAverage: {
        raw: 642.6203,
        fmt: '642.62'
      },
      trailingAnnualDividendRate: {},
      open: {
        raw: 623.01,
        fmt: '623.01'
      },
      toCurrency: null,
      averageVolume10days: {
        raw: 23595600,
        fmt: '23.6M',
        longFmt: '23,595,600'
      },
      expireDate: {},
      yield: {},
      algorithm: null,
      dividendRate: {},
      exDividendDate: {},
      beta: {
        raw: 1.995108,
        fmt: '2.00'
      },
      circulatingSupply: {},
      startDate: {},
      regularMarketDayLow: {
        raw: 595.5,
        fmt: '595.50'
      },
      priceHint: {
        raw: 2,
        fmt: '2',
        longFmt: '2'
      },
      currency: 'USD',
      trailingPE: {
        raw: 604.7996,
        fmt: '604.80'
      },
      regularMarketVolume: {
        raw: 25886766,
        fmt: '25.89M',
        longFmt: '25,886,766'
      },
      lastMarket: null,
      maxSupply: {},
      openInterest: {},
      marketCap: {
        raw: 581456363520,
        fmt: '581.46B',
        longFmt: '581,456,363,520'
      },
      volumeAllCurrencies: {},
      strikePrice: {},
      averageVolume: {
        raw: 33246148,
        fmt: '33.25M',
        longFmt: '33,246,148'
      },
      priceToSalesTrailing12Months: {
        raw: 16.17853,
        fmt: '16.18'
      },
      dayLow: {
        raw: 595.5,
        fmt: '595.50'
      },
      ask: {
        raw: 601.6,
        fmt: '601.60'
      },
      ytdReturn: {},
      askSize: {
        raw: 1200,
        fmt: '1.2k',
        longFmt: '1,200'
      },
      volume: {
        raw: 25886766,
        fmt: '25.89M',
        longFmt: '25,886,766'
      },
      fiftyTwoWeekHigh: {
        raw: 900.4,
        fmt: '900.40'
      },
      forwardPE: {
        raw: 96.88444,
        fmt: '96.88'
      },
      maxAge: 1,
      fromCurrency: null,
      fiveYearAvgDividendYield: {},
      fiftyTwoWeekLow: {
        raw: 181.7,
        fmt: '181.70'
      },
      bid: {
        raw: 601,
        fmt: '601.00'
      },
      tradeable: false,
      dividendYield: {},
      bidSize: {
        raw: 900,
        fmt: '900',
        longFmt: '900'
      },
      dayHigh: {
        raw: 623.09,
        fmt: '623.09'
      }
    },
    symbol: 'TSLA',
    assetProfile: {
      zip: '94304',
      sector: 'Consumer Cyclical',
      fullTimeEmployees: 70757,
      compensationRisk: 10,
      auditRisk: 9,
      longBusinessSummary: 'Tesla, Inc. designs, develops, manufactures, leases, and sells electric vehicles, and energy generation and storage systems in the United States, China, and internationally. The company operates in two segments, Automotive, and Energy Generation and Storage. The Automotive segment offers electric vehicles, as well as sells automotive regulatory credits. It provides sedans and sport utility vehicles through direct and used vehicle sales, a network of Tesla Superchargers, and in-app upgrades; and purchase financing and leasing services. This segment is also involved in the provision of non-warranty after-sales vehicle services, sale of used vehicles, retail merchandise, and vehicle insurance, as well as sale of products through its subsidiaries to third party customers; services for electric vehicles through its company-owned service locations, and Tesla mobile service technicians; and vehicle limited warranties and extended service plans. The Energy Generation and Storage segment engages in the design, manufacture, installation, sale, and leasing of solar energy generation and energy storage products, and related services to residential, commercial, and industrial customers and utilities through its website, stores, and galleries, as well as through a network of channel partners. This segment also offers service and repairs to its energy product customers, including under warranty; and various financing options to its solar customers. The company was formerly known as Tesla Motors, Inc. and changed its name to Tesla, Inc. in February 2017. Tesla, Inc. was founded in 2003 and is headquartered in Palo Alto, California.',
      city: 'Palo Alto',
      phone: '650-681-5000',
      state: 'CA',
      shareHolderRightsRisk: 10,
      compensationAsOfEpochDate: 1609372800,
      governanceEpochDate: 1622505600,
      boardRisk: 10,
      country: 'United States',
      companyOfficers: [
        {
          totalPay: {
            raw: 0,
            fmt: null,
            longFmt: '0'
          },
          exercisedValue: {
            raw: 0,
            fmt: null,
            longFmt: '0'
          },
          yearBorn: 1972,
          name: 'Mr. Elon R. Musk',
          title: 'Technoking of Tesla, CEO & Director',
          maxAge: 1,
          fiscalYear: 2020,
          unexercisedValue: {
            raw: 37461221376,
            fmt: '37.46B',
            longFmt: '37,461,221,376'
          },
          age: 48
        },
        {
          totalPay: {
            raw: 300762,
            fmt: '300.76k',
            longFmt: '300,762'
          },
          exercisedValue: {
            raw: 4189900,
            fmt: '4.19M',
            longFmt: '4,189,900'
          },
          yearBorn: 1985,
          name: 'Mr. Zachary J. Kirkhorn',
          title: 'Master of Coin & CFO',
          maxAge: 1,
          fiscalYear: 2020,
          unexercisedValue: {
            raw: 203430672,
            fmt: '203.43M',
            longFmt: '203,430,672'
          },
          age: 35
        },
        {
          totalPay: {
            raw: 283269,
            fmt: '283.27k',
            longFmt: '283,269'
          },
          exercisedValue: {
            raw: 29759848,
            fmt: '29.76M',
            longFmt: '29,759,848'
          },
          yearBorn: 1973,
          name: 'Mr. Jerome  Guillen',
          title: 'Pres of Tesla Heavy Trucking',
          maxAge: 1,
          fiscalYear: 2020,
          unexercisedValue: {
            raw: 310330944,
            fmt: '310.33M',
            longFmt: '310,330,944'
          },
          age: 47
        },
        {
          totalPay: {
            raw: 283269,
            fmt: '283.27k',
            longFmt: '283,269'
          },
          exercisedValue: {
            raw: 14855479,
            fmt: '14.86M',
            longFmt: '14,855,479'
          },
          yearBorn: 1981,
          name: 'Mr. Andrew D. Baglino',
          title: 'Sr. VP of Powertrain & Energy Engineering',
          maxAge: 1,
          fiscalYear: 2020,
          unexercisedValue: {
            raw: 81078720,
            fmt: '81.08M',
            longFmt: '81,078,720'
          },
          age: 39
        },
        {
          maxAge: 1,
          name: 'Mr. Vaibhav  Taneja',
          age: 42,
          title: 'Corp. Controller & Chief Accounting Officer',
          yearBorn: 1978,
          exercisedValue: {
            raw: 0,
            fmt: null,
            longFmt: '0'
          },
          unexercisedValue: {
            raw: 0,
            fmt: null,
            longFmt: '0'
          }
        },
        {
          maxAge: 1,
          name: 'Mr. Martin  Viecha',
          title: 'Sr. Director for Investor Relations',
          exercisedValue: {
            raw: 0,
            fmt: null,
            longFmt: '0'
          },
          unexercisedValue: {
            raw: 0,
            fmt: null,
            longFmt: '0'
          }
        },
        {
          maxAge: 1,
          name: 'Mr. Alan  Prescott',
          title: 'VP of Legal',
          exercisedValue: {
            raw: 0,
            fmt: null,
            longFmt: '0'
          },
          unexercisedValue: {
            raw: 0,
            fmt: null,
            longFmt: '0'
          }
        },
        {
          maxAge: 1,
          name: 'Mr. Dave  Arnold',
          title: 'Sr. Director of Global Communications',
          exercisedValue: {
            raw: 0,
            fmt: null,
            longFmt: '0'
          },
          unexercisedValue: {
            raw: 0,
            fmt: null,
            longFmt: '0'
          }
        },
        {
          maxAge: 1,
          name: 'Brian  Scelfo',
          title: 'Sr. Director of Corp. Devel.',
          exercisedValue: {
            raw: 0,
            fmt: null,
            longFmt: '0'
          },
          unexercisedValue: {
            raw: 0,
            fmt: null,
            longFmt: '0'
          }
        },
        {
          maxAge: 1,
          name: 'Mr. Jeffrey B. Straubel',
          age: 44,
          title: 'Sr. Advisor',
          yearBorn: 1976,
          fiscalYear: 2018,
          exercisedValue: {
            raw: 0,
            fmt: null,
            longFmt: '0'
          },
          unexercisedValue: {
            raw: 0,
            fmt: null,
            longFmt: '0'
          }
        }
      ],
      website: 'http://www.tesla.com',
      maxAge: 86400,
      overallRisk: 10,
      address1: '3500 Deer Creek Road',
      industry: 'Auto Manufacturers'
    },
    pageViews: {
      shortTermTrend: 'NEUTRAL',
      midTermTrend: 'UP',
      longTermTrend: 'UP',
      maxAge: 1
    }
  },
  GOOGL: {
    financialsTemplate: {
      code: 'N',
      maxAge: 1
    },
    price: {
      quoteSourceName: 'Nasdaq Real Time Price',
      regularMarketOpen: {
        raw: 2412.01,
        fmt: '2,412.01'
      },
      averageDailyVolume3Month: {
        raw: 1551892,
        fmt: '1.55M',
        longFmt: '1,551,892'
      },
      exchange: 'NMS',
      regularMarketTime: 1623182402,
      volume24Hr: {},
      regularMarketDayHigh: {
        raw: 2418.86,
        fmt: '2,418.86'
      },
      shortName: 'Alphabet Inc.',
      averageDailyVolume10Day: {
        raw: 1117640,
        fmt: '1.12M',
        longFmt: '1,117,640'
      },
      longName: 'Alphabet Inc.',
      regularMarketChange: {
        raw: -3.8601074,
        fmt: '-3.86'
      },
      currencySymbol: '$',
      regularMarketPreviousClose: {
        raw: 2402.3,
        fmt: '2,402.30'
      },
      postMarketTime: 1623192209,
      preMarketPrice: {
        raw: 2411,
        fmt: '2,411.00'
      },
      preMarketTime: 1623158998,
      exchangeDataDelayedBy: 0,
      toCurrency: null,
      postMarketChange: {
        raw: 1.56006,
        fmt: '1.56'
      },
      postMarketPrice: {
        raw: 2400,
        fmt: '2,400.00'
      },
      exchangeName: 'NasdaqGS',
      preMarketChange: {
        raw: 8.69995,
        fmt: '8.70'
      },
      circulatingSupply: {},
      regularMarketDayLow: {
        raw: 2394.89,
        fmt: '2,394.89'
      },
      priceHint: {
        raw: 2,
        fmt: '2',
        longFmt: '2'
      },
      currency: 'USD',
      regularMarketPrice: {
        raw: 2398.44,
        fmt: '2,398.44'
      },
      regularMarketVolume: {
        raw: 1171388,
        fmt: '1.17M',
        longFmt: '1,171,388.00'
      },
      lastMarket: null,
      regularMarketSource: 'FREE_REALTIME',
      openInterest: {},
      marketState: 'POST',
      underlyingSymbol: null,
      marketCap: {
        raw: 1627955396608,
        fmt: '1.63T',
        longFmt: '1,627,955,396,608.00'
      },
      quoteType: 'EQUITY',
      preMarketChangePercent: {
        raw: 0.00362151,
        fmt: '0.36%'
      },
      volumeAllCurrencies: {},
      postMarketSource: 'FREE_REALTIME',
      strikePrice: {},
      symbol: 'GOOGL',
      postMarketChangePercent: {
        raw: 0.00065044704,
        fmt: '0.07%'
      },
      preMarketSource: 'FREE_REALTIME',
      maxAge: 1,
      fromCurrency: null,
      regularMarketChangePercent: {
        raw: -0.0016068383,
        fmt: '-0.16%'
      }
    },
    secFilings: {
      filings: [
        {
          date: '2021-06-04',
          epochDate: 1622842543,
          type: '8-K',
          title: 'Change in Directors or Principal Officers, Submission of Matters to a Vote of Security Holders, Financial Statements and Exhibits',
          edgarUrl: 'https://yahoo.brand.edgar-online.com/DisplayFiling.aspx?TabIndex=2&dcn=0001193125-21-182989&nav=1&src=Yahoo',
          maxAge: 1
        },
        {
          date: '2021-04-28',
          epochDate: 1619607947,
          type: '10-Q',
          title: 'Quarterly Report',
          edgarUrl: 'https://yahoo.brand.edgar-online.com/DisplayFiling.aspx?TabIndex=2&dcn=0001652044-21-000020&nav=1&src=Yahoo',
          maxAge: 1
        },
        {
          date: '2021-04-27',
          epochDate: 1619557848,
          type: '8-K',
          title: 'Results of Operations and Financial Condition, Financial Statements and Exhibits',
          edgarUrl: 'https://yahoo.brand.edgar-online.com/DisplayFiling.aspx?TabIndex=2&dcn=0001652044-21-000018&nav=1&src=Yahoo',
          maxAge: 1
        },
        {
          date: '2021-04-09',
          epochDate: 1618003971,
          type: '8-K',
          title: 'Change in Directors or Principal Officers',
          edgarUrl: 'https://yahoo.brand.edgar-online.com/DisplayFiling.aspx?TabIndex=2&dcn=0001193125-21-111624&nav=1&src=Yahoo',
          maxAge: 1
        },
        {
          date: '2021-03-04',
          epochDate: 1614896884,
          type: '8-K',
          title: 'Regulation FD Disclosure',
          edgarUrl: 'https://yahoo.brand.edgar-online.com/DisplayFiling.aspx?TabIndex=2&dcn=0001193125-21-069770&nav=1&src=Yahoo',
          maxAge: 1
        },
        {
          date: '2021-02-03',
          epochDate: 1612350258,
          type: '10-K',
          title: 'Annual Report',
          edgarUrl: 'https://yahoo.brand.edgar-online.com/DisplayFiling.aspx?TabIndex=2&dcn=0001652044-21-000010&nav=1&src=Yahoo',
          maxAge: 1
        },
        {
          date: '2021-02-02',
          epochDate: 1612299743,
          type: '8-K',
          title: 'Results of Operations and Financial Condition, Financial Statements and Exhibits',
          edgarUrl: 'https://yahoo.brand.edgar-online.com/DisplayFiling.aspx?TabIndex=2&dcn=0001652044-21-000006&nav=1&src=Yahoo',
          maxAge: 1
        },
        {
          date: '2020-12-21',
          epochDate: 1608588878,
          type: '8-K',
          title: 'Other Events',
          edgarUrl: 'https://yahoo.brand.edgar-online.com/DisplayFiling.aspx?TabIndex=2&dcn=0001193125-20-323272&nav=1&src=Yahoo',
          maxAge: 1
        },
        {
          date: '2020-10-30',
          epochDate: 1604056259,
          type: '10-Q',
          title: 'Quarterly Report',
          edgarUrl: 'https://yahoo.brand.edgar-online.com/DisplayFiling.aspx?TabIndex=2&dcn=0001652044-20-000050&nav=1&src=Yahoo',
          maxAge: 1
        },
        {
          date: '2020-10-29',
          epochDate: 1604005357,
          type: '8-K',
          title: 'Results of Operations and Financial Condition, Financial Statements and Exhibits',
          edgarUrl: 'https://yahoo.brand.edgar-online.com/DisplayFiling.aspx?TabIndex=2&dcn=0001652044-20-000046&nav=1&src=Yahoo',
          maxAge: 1
        },
        {
          date: '2020-10-27',
          epochDate: 1603833615,
          type: '8-K/A',
          title: 'Amendments to Articles of Inc. or Bylaws; Change in Fiscal Year, Financial Statements and Exhibits',
          edgarUrl: 'https://yahoo.brand.edgar-online.com/DisplayFiling.aspx?TabIndex=2&dcn=0001193125-20-278427&nav=1&src=Yahoo',
          maxAge: 1
        },
        {
          date: '2020-10-26',
          epochDate: 1603749953,
          type: '8-K',
          title: 'Amendments to Articles of Inc. or Bylaws; Change in Fiscal Year, Financial Statements and Exhibits',
          edgarUrl: 'https://yahoo.brand.edgar-online.com/DisplayFiling.aspx?TabIndex=2&dcn=0001652044-20-000038&nav=1&src=Yahoo',
          maxAge: 1
        },
        {
          date: '2020-10-23',
          epochDate: 1603489669,
          type: '8-K',
          title: 'Other Events, Financial Statements and Exhibits',
          edgarUrl: 'https://yahoo.brand.edgar-online.com/DisplayFiling.aspx?TabIndex=2&dcn=0001193125-20-275550&nav=1&src=Yahoo',
          maxAge: 1
        },
        {
          date: '2020-10-20',
          epochDate: 1603231666,
          type: '8-K',
          title: 'Other Events',
          edgarUrl: 'https://yahoo.brand.edgar-online.com/DisplayFiling.aspx?TabIndex=2&dcn=0001193125-20-272940&nav=1&src=Yahoo',
          maxAge: 1
        },
        {
          date: '2020-09-25',
          epochDate: 1601068361,
          type: '8-K',
          title: 'Other Events, Financial Statements and Exhibits',
          edgarUrl: 'https://yahoo.brand.edgar-online.com/DisplayFiling.aspx?TabIndex=2&dcn=0001193125-20-254587&nav=1&src=Yahoo',
          maxAge: 1
        },
        {
          date: '2020-08-05',
          epochDate: 1596665344,
          type: '8-K',
          title: 'Other Events, Financial Statements and Exhibits',
          edgarUrl: 'https://yahoo.brand.edgar-online.com/DisplayFiling.aspx?TabIndex=2&dcn=0001193125-20-210772&nav=1&src=Yahoo',
          maxAge: 1
        },
        {
          date: '2020-07-31',
          epochDate: 1596194486,
          type: '10-Q',
          title: 'Quarterly Report',
          edgarUrl: 'https://yahoo.brand.edgar-online.com/DisplayFiling.aspx?TabIndex=2&dcn=0001652044-20-000032&nav=1&src=Yahoo',
          maxAge: 1
        },
        {
          date: '2020-07-30',
          epochDate: 1596152482,
          type: '8-K',
          title: 'Results of Operations and Financial Condition, Financial Statements and Exhibits',
          edgarUrl: 'https://yahoo.brand.edgar-online.com/DisplayFiling.aspx?TabIndex=2&dcn=0001652044-20-000031&nav=1&src=Yahoo',
          maxAge: 1
        },
        {
          date: '2020-06-05',
          epochDate: 1591388867,
          type: '8-K',
          title: 'Disclosing Change in Directors or Principal Officers, Submission of Matters to a Vote of Secur',
          edgarUrl: 'https://yahoo.brand.edgar-online.com/DisplayFiling.aspx?TabIndex=2&dcn=0001652044-20-000027&nav=1&src=Yahoo',
          maxAge: 1
        },
        {
          date: '2020-04-29',
          epochDate: 1588155383,
          type: '10-Q',
          title: 'Quarterly Report',
          edgarUrl: 'https://yahoo.brand.edgar-online.com/DisplayFiling.aspx?TabIndex=2&dcn=0001652044-20-000021&nav=1&src=Yahoo',
          maxAge: 1
        },
        {
          date: '2020-04-28',
          epochDate: 1588104216,
          type: '8-K',
          title: 'Disclosing Results of Operations and Financial Condition, Financial Statements and Exhibits',
          edgarUrl: 'https://yahoo.brand.edgar-online.com/DisplayFiling.aspx?TabIndex=2&dcn=0001652044-20-000018&nav=1&src=Yahoo',
          maxAge: 1
        },
        {
          date: '2020-02-04',
          epochDate: 1580814377,
          type: '10-K',
          title: 'Annual Report',
          edgarUrl: 'https://yahoo.brand.edgar-online.com/DisplayFiling.aspx?TabIndex=2&dcn=0001652044-20-000008&nav=1&src=Yahoo',
          maxAge: 1
        },
        {
          date: '2020-02-03',
          epochDate: 1580763767,
          type: '8-K',
          title: 'Disclosing Results of Operations and Financial Condition, Financial Statements and Exhibits',
          edgarUrl: 'https://yahoo.brand.edgar-online.com/DisplayFiling.aspx?TabIndex=2&dcn=0001652044-20-000004&nav=1&src=Yahoo',
          maxAge: 1
        },
        {
          date: '2019-12-09',
          epochDate: 1575928051,
          type: '8-K',
          title: 'Disclosing Change in Directors or Principal Officers, Financial Statements and Exhibits',
          edgarUrl: 'https://yahoo.brand.edgar-online.com/DisplayFiling.aspx?TabIndex=2&dcn=0001652044-19-000040&nav=1&src=Yahoo',
          maxAge: 1
        },
        {
          date: '2019-12-04',
          epochDate: 1575457284,
          type: '8-K',
          title: 'Disclosing Change in Directors or Principal Officers, Financial Statements and Exhibits',
          edgarUrl: 'https://yahoo.brand.edgar-online.com/DisplayFiling.aspx?TabIndex=2&dcn=0001193125-19-305505&nav=1&src=Yahoo',
          maxAge: 1
        },
        {
          date: '2019-10-29',
          epochDate: 1572343366,
          type: '10-Q',
          title: 'Quarterly Report',
          edgarUrl: 'https://yahoo.brand.edgar-online.com/DisplayFiling.aspx?TabIndex=2&dcn=0001652044-19-000032&nav=1&src=Yahoo',
          maxAge: 1
        },
        {
          date: '2019-10-28',
          epochDate: 1572293072,
          type: '8-K',
          title: 'Disclosing Results of Operations and Financial Condition, Financial Statements and Exhibits',
          edgarUrl: 'https://yahoo.brand.edgar-online.com/DisplayFiling.aspx?TabIndex=2&dcn=0001652044-19-000030&nav=1&src=Yahoo',
          maxAge: 1
        },
        {
          date: '2019-07-26',
          epochDate: 1564135536,
          type: '10-Q',
          title: 'Quarterly Report',
          edgarUrl: 'https://yahoo.brand.edgar-online.com/DisplayFiling.aspx?TabIndex=2&dcn=0001652044-19-000023&nav=1&src=Yahoo',
          maxAge: 1
        },
        {
          date: '2019-07-25',
          epochDate: 1564084929,
          type: '8-K',
          title: 'Disclosing Results of Operations and Financial Condition, Financial Statements and Exhibits',
          edgarUrl: 'https://yahoo.brand.edgar-online.com/DisplayFiling.aspx?TabIndex=2&dcn=0001652044-19-000021&nav=1&src=Yahoo',
          maxAge: 1
        },
        {
          date: '2019-06-21',
          epochDate: 1561151994,
          type: '8-K',
          title: 'Disclosing Change in Directors or Principal Officers, Submission of Matters to a Vote of Secur',
          edgarUrl: 'https://yahoo.brand.edgar-online.com/DisplayFiling.aspx?TabIndex=2&dcn=0001193125-19-178962&nav=1&src=Yahoo',
          maxAge: 1
        }
      ],
      maxAge: 86400
    },
    quoteType: {
      exchange: 'NMS',
      shortName: 'Alphabet Inc.',
      longName: 'Alphabet Inc.',
      exchangeTimezoneName: 'America/New_York',
      exchangeTimezoneShortName: 'EDT',
      isEsgPopulated: false,
      gmtOffSetMilliseconds: '-14400000',
      quoteType: 'EQUITY',
      symbol: 'GOOGL',
      messageBoardId: 'finmb_29096',
      market: 'us_market'
    },
    calendarEvents: {
      maxAge: 1,
      earnings: {
        earningsDate: [
          {
            raw: 1627430400,
            fmt: '2021-07-28'
          },
          {
            raw: 1627862400,
            fmt: '2021-08-02'
          }
        ],
        earningsAverage: {
          raw: 19.21,
          fmt: '19.21'
        },
        earningsLow: {
          raw: 12.71,
          fmt: '12.71'
        },
        earningsHigh: {
          raw: 24.43,
          fmt: '24.43'
        },
        revenueAverage: {
          raw: 56098100000,
          fmt: '56.1B',
          longFmt: '56,098,100,000'
        },
        revenueLow: {
          raw: 52563000000,
          fmt: '52.56B',
          longFmt: '52,563,000,000'
        },
        revenueHigh: {
          raw: 58188000000,
          fmt: '58.19B',
          longFmt: '58,188,000,000'
        }
      },
      exDividendDate: {},
      dividendDate: {}
    },
    summaryDetail: {
      previousClose: {
        raw: 2402.3,
        fmt: '2,402.30'
      },
      regularMarketOpen: {
        raw: 2412.01,
        fmt: '2,412.01'
      },
      twoHundredDayAverage: {
        raw: 2041.6755,
        fmt: '2,041.68'
      },
      trailingAnnualDividendYield: {},
      payoutRatio: {
        raw: 0,
        fmt: '0.00%'
      },
      volume24Hr: {},
      regularMarketDayHigh: {
        raw: 2418.86,
        fmt: '2,418.86'
      },
      navPrice: {},
      averageDailyVolume10Day: {
        raw: 1117640,
        fmt: '1.12M',
        longFmt: '1,117,640'
      },
      totalAssets: {},
      regularMarketPreviousClose: {
        raw: 2402.3,
        fmt: '2,402.30'
      },
      fiftyDayAverage: {
        raw: 2319.2046,
        fmt: '2,319.20'
      },
      trailingAnnualDividendRate: {},
      open: {
        raw: 2412.01,
        fmt: '2,412.01'
      },
      toCurrency: null,
      averageVolume10days: {
        raw: 1117640,
        fmt: '1.12M',
        longFmt: '1,117,640'
      },
      expireDate: {},
      yield: {},
      algorithm: null,
      dividendRate: {},
      exDividendDate: {},
      beta: {
        raw: 1.017391,
        fmt: '1.02'
      },
      circulatingSupply: {},
      startDate: {},
      regularMarketDayLow: {
        raw: 2394.89,
        fmt: '2,394.89'
      },
      priceHint: {
        raw: 2,
        fmt: '2',
        longFmt: '2'
      },
      currency: 'USD',
      trailingPE: {
        raw: 31.962152,
        fmt: '31.96'
      },
      regularMarketVolume: {
        raw: 1171388,
        fmt: '1.17M',
        longFmt: '1,171,388'
      },
      lastMarket: null,
      maxSupply: {},
      openInterest: {},
      marketCap: {
        raw: 1627955396608,
        fmt: '1.63T',
        longFmt: '1,627,955,396,608'
      },
      volumeAllCurrencies: {},
      strikePrice: {},
      averageVolume: {
        raw: 1551892,
        fmt: '1.55M',
        longFmt: '1,551,892'
      },
      priceToSalesTrailing12Months: {
        raw: 8.277094,
        fmt: '8.28'
      },
      dayLow: {
        raw: 2394.89,
        fmt: '2,394.89'
      },
      ask: {
        raw: 2400.9,
        fmt: '2,400.90'
      },
      ytdReturn: {},
      askSize: {
        raw: 900,
        fmt: '900',
        longFmt: '900'
      },
      volume: {
        raw: 1171388,
        fmt: '1.17M',
        longFmt: '1,171,388'
      },
      fiftyTwoWeekHigh: {
        raw: 2431.38,
        fmt: '2,431.38'
      },
      forwardPE: {
        raw: 25.262691,
        fmt: '25.26'
      },
      maxAge: 1,
      fromCurrency: null,
      fiveYearAvgDividendYield: {},
      fiftyTwoWeekLow: {
        raw: 1351.65,
        fmt: '1,351.65'
      },
      bid: {
        raw: 2397.63,
        fmt: '2,397.63'
      },
      tradeable: false,
      dividendYield: {},
      bidSize: {
        raw: 800,
        fmt: '800',
        longFmt: '800'
      },
      dayHigh: {
        raw: 2418.86,
        fmt: '2,418.86'
      }
    },
    symbol: 'GOOGL',
    assetProfile: {
      zip: '94043',
      sector: 'Communication Services',
      fullTimeEmployees: 139995,
      compensationRisk: 10,
      auditRisk: 9,
      longBusinessSummary: 'Alphabet Inc. provides online advertising services in the United States, Europe, the Middle East, Africa, the Asia-Pacific, Canada, and Latin America. The company offers performance and brand advertising services. It operates through Google Services, Google Cloud, and Other Bets segments. The Google Services segment provides products and services, such as ads, Android, Chrome, hardware, Google Maps, Google Play, Search, and YouTube, as well as technical infrastructure; and digital content. The Google Cloud segment offers infrastructure and data analytics platforms, collaboration tools, and other services for enterprise customers. The Other Bets segment sells internet and TV services, as well as licensing and research and development services. The company was founded in 1998 and is headquartered in Mountain View, California.',
      city: 'Mountain View',
      phone: '650-253-0000',
      state: 'CA',
      shareHolderRightsRisk: 10,
      compensationAsOfEpochDate: 1609372800,
      governanceEpochDate: 1622505600,
      boardRisk: 3,
      country: 'United States',
      companyOfficers: [
        {
          totalPay: {
            raw: 7425547,
            fmt: '7.43M',
            longFmt: '7,425,547'
          },
          exercisedValue: {
            raw: 3595837,
            fmt: '3.6M',
            longFmt: '3,595,837'
          },
          yearBorn: 1973,
          name: 'Mr. Sundar  Pichai',
          title: 'CEO & Director',
          maxAge: 1,
          fiscalYear: 2020,
          unexercisedValue: {
            raw: 24802002,
            fmt: '24.8M',
            longFmt: '24,802,002'
          },
          age: 47
        },
        {
          totalPay: {
            raw: 1,
            fmt: '1',
            longFmt: '1'
          },
          exercisedValue: {
            raw: 0,
            fmt: null,
            longFmt: '0'
          },
          yearBorn: 1973,
          name: 'Mr. Lawrence Edward Page',
          title: 'Co-Founder & Director',
          maxAge: 1,
          fiscalYear: 2020,
          unexercisedValue: {
            raw: 0,
            fmt: null,
            longFmt: '0'
          },
          age: 47
        },
        {
          totalPay: {
            raw: 1,
            fmt: '1',
            longFmt: '1'
          },
          exercisedValue: {
            raw: 0,
            fmt: null,
            longFmt: '0'
          },
          yearBorn: 1974,
          name: 'Mr. Sergey  Brin',
          title: 'Co-Founder & Director',
          maxAge: 1,
          fiscalYear: 2020,
          unexercisedValue: {
            raw: 0,
            fmt: null,
            longFmt: '0'
          },
          age: 46
        },
        {
          totalPay: {
            raw: 672770,
            fmt: '672.77k',
            longFmt: '672,770'
          },
          exercisedValue: {
            raw: 0,
            fmt: null,
            longFmt: '0'
          },
          yearBorn: 1958,
          name: 'Ms. Ruth M. Porat',
          title: 'Sr. VP & CFO',
          maxAge: 1,
          fiscalYear: 2020,
          unexercisedValue: {
            raw: 0,
            fmt: null,
            longFmt: '0'
          },
          age: 62
        },
        {
          totalPay: {
            raw: 664750,
            fmt: '664.75k',
            longFmt: '664,750'
          },
          exercisedValue: {
            raw: 0,
            fmt: null,
            longFmt: '0'
          },
          yearBorn: 1961,
          name: 'Dr. Prabhakar  Raghavan',
          title: 'Sr. VP of Google',
          maxAge: 1,
          fiscalYear: 2020,
          unexercisedValue: {
            raw: 0,
            fmt: null,
            longFmt: '0'
          },
          age: 59
        },
        {
          maxAge: 1,
          name: 'Mr. Philipp  Schindler',
          title: 'Sr. VP & Chief Bus. Officer of Google',
          fiscalYear: 2020,
          totalPay: {
            raw: 881816,
            fmt: '881.82k',
            longFmt: '881,816'
          },
          exercisedValue: {
            raw: 0,
            fmt: null,
            longFmt: '0'
          },
          unexercisedValue: {
            raw: 0,
            fmt: null,
            longFmt: '0'
          }
        },
        {
          totalPay: {
            raw: 664750,
            fmt: '664.75k',
            longFmt: '664,750'
          },
          exercisedValue: {
            raw: 0,
            fmt: null,
            longFmt: '0'
          },
          yearBorn: 1961,
          name: 'Mr. Kent  Walker',
          title: 'Corp. Sec.',
          maxAge: 1,
          fiscalYear: 2020,
          unexercisedValue: {
            raw: 0,
            fmt: null,
            longFmt: '0'
          },
          age: 59
        },
        {
          maxAge: 1,
          name: "Ms. Amie Thuener O'Toole",
          age: 44,
          title: 'Chief Accounting Officer & VP',
          yearBorn: 1976,
          exercisedValue: {
            raw: 0,
            fmt: null,
            longFmt: '0'
          },
          unexercisedValue: {
            raw: 0,
            fmt: null,
            longFmt: '0'
          }
        },
        {
          maxAge: 1,
          name: 'Ms. Ellen  West',
          title: 'VP of Investor Relations',
          exercisedValue: {
            raw: 0,
            fmt: null,
            longFmt: '0'
          },
          unexercisedValue: {
            raw: 0,
            fmt: null,
            longFmt: '0'
          }
        },
        {
          maxAge: 1,
          name: 'Ms. Ivy  Ross',
          age: 64,
          title: 'Head of Project Aura and VP',
          yearBorn: 1956,
          exercisedValue: {
            raw: 0,
            fmt: null,
            longFmt: '0'
          },
          unexercisedValue: {
            raw: 0,
            fmt: null,
            longFmt: '0'
          }
        }
      ],
      website: 'http://www.abc.xyz',
      maxAge: 86400,
      overallRisk: 10,
      address1: '1600 Amphitheatre Parkway',
      industry: 'Internet Content & Information'
    },
    pageViews: {
      shortTermTrend: 'UP',
      midTermTrend: 'UP',
      longTermTrend: 'UP',
      maxAge: 1
    }
  }
};
