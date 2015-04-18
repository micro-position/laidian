cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/org.bcsphere.bluetooth/www/org.underscorejs.underscore/underscore.js",
        "id": "org.bcsphere.bluetooth.underscorejs.underscore"
    },
    {
        "file": "plugins/org.bcsphere.bluetooth/www/org.bcsphere/bc.js",
        "id": "org.bcsphere.bluetooth.bcjs",
        "merges": [
            "BC"
        ]
    },
    {
        "file": "plugins/org.bcsphere.bluetooth/www/org.bcsphere.bluetooth/bluetoothapi.js",
        "id": "org.bcsphere.bluetooth.bluetoothapi",
        "merges": [
            "navigator.bluetooth"
        ]
    }
]
});