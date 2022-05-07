module.exports = api => {
  api.cache(true)
  
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      ['inline-dotenv', {
        systemVar: 'overwrite'
      }],
      'react-native-reanimated/plugin'
    ]
  }
}