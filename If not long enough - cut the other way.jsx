var pluginName = "Save for web";

// enable double clicking from the Macintosh Finder or the Windows Explorer
#target photoshop

// debug level: 0-2 (0:disable, 1:break on error, 2:break at beginning)
$.level = 0;
//debugger; // launch debugger on next line

var gScriptResult;

var docRef = app.activeDocument

app.preferences.rulerUnits = Units.PIXELS;

if (true) {

}

docRef.resizeCanvas (w, h);
