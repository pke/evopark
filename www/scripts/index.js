// For an introduction to the Blank template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkID=397704
// To debug code on page load in Ripple or on Android devices/emulators: launch your app, set breakpoints, 
// and then run "window.location.reload()" in the JavaScript Console.
(function () {
    "use strict";

    document.addEventListener('deviceready', onDeviceReady.bind(this), false);

    WinJS.Namespace.define("App.Model", {
        garages: (new WinJS.Binding.List()).createSorted(function (a, b) {
            return a.name.localeCompare(b.name);
        }),
        activities: new WinJS.Binding.List(),
        nearby: (new WinJS.Binding.List()).createSorted(function (a,b) {
            return a.name.localeCompare(b.name);
        })
    });

    WinJS.Namespace.define("App.Binding", {
        backgroundImage: WinJS.Binding.converter(function (value) {
            return "url(" + value + ")";
        })
    });
    
    evopark.api.getGaragesAsync().then(function (garages) {
        evopark.api.getRetailersNearParkingGarageAsync(2).then(function (dealers) {
            App.Model.nearby.push.apply(App.Model.nearby, dealers);
        });
        App.Model.garages.push.apply(App.Model.garages, garages);
    });
    /*evopark.api.getActivitiesAsync().then(function (activities) {
        App.Model.activities.push.apply(App.Model.activities, activities);
    }, function(error) {
    });*/
    
    function onDeviceReady() {
        // Handle the Cordova pause and resume events
        document.addEventListener( 'pause', onPause.bind( this ), false );
        document.addEventListener('resume', onResume.bind(this), false);

        WinJS.Navigation.history = WinJS.Application.sessionState.history || { };
        WinJS.Navigation.history.current.initialPlaceholder = true;
        // Optimize the load of the application and while the splash screen is shown, execute high priority scheduled work.
        WinJS.UI.disableAnimations();
        WinJS.UI.processAll().then(function () {
            document.querySelector(".appPivot").style.display = "";
            appbar.style.display = "";
            //return WinJS.Navigation.navigate(WinJS.Navigation.location || "pages/home.html", WinJS.Navigation.state);
        }).then(function () {
            return WinJS.Utilities.Scheduler.requestDrain(WinJS.Utilities.Scheduler.Priority.aboveNormal + 1);
        }).then(function () {
            WinJS.UI.enableAnimations();
        });               
        // TODO: Cordova has been loaded. Perform any initialization that requires Cordova here.
    };

    function onPause() {
        // TODO: This application has been suspended. Save application state here.
    };

    function onResume() {
        // TODO: This application has been reactivated. Restore application state here.
    };
} )();