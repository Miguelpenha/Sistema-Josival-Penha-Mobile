import * as Updates from 'expo-updates'

async function updateApp(response?: boolean): Promise<void | boolean> {
    if (process.env.NODE_ENV === 'production') {
        const { isAvailable } = await Updates.checkForUpdateAsync()

        if (isAvailable) {
          if (Updates.releaseChannel === 'production') {
            await Updates.fetchUpdateAsync()
            await Updates.reloadAsync()
            
            if (response) {
              return true
            }
          }
        } else {
          if (response) {
            return false
          }
        }
    }
}

export default updateApp