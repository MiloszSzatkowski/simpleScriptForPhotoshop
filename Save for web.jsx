var pluginName = "Save for web";

// enable double clicking from the Macintosh Finder or the Windows Explorer
#target photoshop

// debug level: 0-2 (0:disable, 1:break on error, 2:break at beginning)
$.level = 0;
//debugger; // launch debugger on next line

var gScriptResult;

var docRef = app.activeDocument

/////////////////////////////////////////////// !!!!!
if (app.documents.length == 0) {alert ("Musisz mieć otwarty dokument aby wykonać tą operację."); }

else {

app.preferences.rulerUnits = Units.PIXELS;

    // var path = "C:/Users/miopu/Desktop/Coding/Photoshop/Mockupy Mackiewicza/00 Tested image/Destination/";

    // jpgFile = new File( pathSaved + docRef.fullName + (new Date().getTime().toString())+ ".jpeg" );

    // var path = "C:/Users/miopu/Desktop/Coding/Photoshop/Mockupy Mackiewicza/00 Tested image/Destination/";

    // jpgFile = new File( path + (new Date().getTime().toString()) + ".jpeg" )
    var doc = app.activeDocument;
    var Path = doc.path;
    var Name = doc.name.replace(/\.[^\.]+$/, '');
    var Suffix = " Mockup";
    var saveFile = File("C:/Users/miopu/Desktop/Coding/Photoshop/Mockupy Mackiewicza/00 Tested image/Destination" + "/" +
    app.activeDocument.activeLayer.name + "_" + app.activeDocument.name + " " +
    (new Date().getTime().toString()) + Suffix + ".jpg");

    SaveJPEG(saveFile, 12);

    function SaveJPEG(saveFile, jpegQuality){
    jpgSaveOptions = new JPEGSaveOptions();
    jpgSaveOptions.embedColorProfile = true;
    jpgSaveOptions.formatOptions = FormatOptions.STANDARDBASELINE;
    jpgSaveOptions.matte = MatteType.NONE;
    jpgSaveOptions.quality = jpegQuality;
    activeDocument.saveAs(saveFile, jpgSaveOptions, true, Extension.LOWERCASE);
    }

    // docRef.close(SaveOptions.DONOTSAVECHANGES)

}


    // app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
