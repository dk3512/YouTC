using ReactNative.Bridge;
using System;
using System.Collections.Generic;
using Windows.ApplicationModel.Core;
using Windows.UI.Core;

namespace Hide.Android.Navigation.Bar.RNHideAndroidNavigationBar
{
    /// <summary>
    /// A module that allows JS to share data.
    /// </summary>
    class RNHideAndroidNavigationBarModule : NativeModuleBase
    {
        /// <summary>
        /// Instantiates the <see cref="RNHideAndroidNavigationBarModule"/>.
        /// </summary>
        internal RNHideAndroidNavigationBarModule()
        {

        }

        /// <summary>
        /// The name of the native module.
        /// </summary>
        public override string Name
        {
            get
            {
                return "RNHideAndroidNavigationBar";
            }
        }
    }
}
