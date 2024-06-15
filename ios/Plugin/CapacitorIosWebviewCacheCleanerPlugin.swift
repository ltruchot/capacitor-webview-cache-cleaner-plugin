import Capacitor
import WebKit

func clearCookies() {
    let cookieStore = HTTPCookieStorage.shared
    if let cookies = cookieStore.cookies {
        for cookie in cookies {
            cookieStore.deleteCookie(cookie)
        }
    }
}

@objc(CapacitorIosWebviewCacheCleanerPlugin)
public class CapacitorIosWebviewCacheCleanerPlugin: CAPPlugin {

    @objc func clearWebViewCache(_ call: CAPPluginCall) {

        clearCookies()

        let dateFrom = Date(timeIntervalSince1970: 0)
        let dataTypes = WKWebsiteDataStore.allWebsiteDataTypes()

        WKWebsiteDataStore.default().removeData(ofTypes: dataTypes, modifiedSince: dateFrom) {
            call.resolve([
                "success": true
            ])
        }
    }
}
