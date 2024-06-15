package io.github.ltruchot.capacitorwebviewcachecleaner;

import com.getcapacitor.JSObject;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;

@CapacitorPlugin(name = "CapacitorWebviewCacheCleaner")
public class CapacitorWebviewCacheCleanerPlugin extends Plugin {

    private CapacitorWebviewCacheCleaner implementation = new CapacitorWebviewCacheCleaner();

    @PluginMethod
    public void echo(PluginCall call) {
        String value = call.getString("value");

        JSObject ret = new JSObject();
        ret.put("value", implementation.echo(value));
        call.resolve(ret);
    }
}
