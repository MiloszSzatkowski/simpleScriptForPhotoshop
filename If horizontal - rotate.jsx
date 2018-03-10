var pluginName = "Rotate conditional";

// enable double clicking from the Macintosh Finder or the Windows Explorer
#target photoshop

// debug level: 0-2 (0:disable, 1:break on error, 2:break at beginning)
$.level = 0;
//debugger; // launch debugger on next line

// on localized builds we pull the $$$/Strings from a .dat file, see documentation for more details
$.localize = true;

var gScriptResult;

app.preferences.rulerUnits = Units.PIXELS;

/////////////////////////////////////////////// !!!!!
if (app.documents.length == 0) {alert ("Musisz mieć otwarty dokument aby wykonać tą operację."); }

else if (app.activeDocument.width>app.activeDocument.height) {
  app.activeDocument.rotateCanvas(90);
}
