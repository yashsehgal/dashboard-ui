export default function loadImageFromImagekit(image_id, image_filetype) {
  let ImagekitURLExport;

  if (image_filetype === "svg") {
    switch (image_id) {
      case "gitspace-logo":
        ImagekitURLExport =
          "https://ik.imagekit.io/eawrckp8wfi/GitSpace/gitspaces-logo_U6WZLL5Eb.svg?updatedAt=1630749748225";
        break;
      case "gitspace-logo-with-title-landscape":
        ImagekitURLExport =
          "https://ik.imagekit.io/eawrckp8wfi/GitSpace/gitspace-logo-with-title-landscape_zYmDzjWN3.svg?updatedAt=1630749744747";
        break;
      case "gitspace-logo-with-title-square":
        ImagekitURLExport =
          "https://ik.imagekit.io/eawrckp8wfi/GitSpace/gitspace-logo-with-title-square_noeBLSjnI.svg?updatedAt=1630749746504";
        break;
      default:
        console.log(
          "Imagekit image export method warning, default method is being executed, check the parameters"
        );
        ImagekitURLExport =
          "https://ik.imagekit.io/eawrckp8wfi/GitSpace/gitspaces-logo_U6WZLL5Eb.svg?updatedAt=1630749748225";
        break;
    }
  } else if (image_filetype === "png") {
    switch (image_id) {
      case "gitspace-logo":
        ImagekitURLExport =
          "https://ik.imagekit.io/eawrckp8wfi/GitSpace/gitspaces-logo_D_ujqzlnS.png?updatedAt=1630749747348";
        break;
      case "gitspace-logo-with-title-landscape":
        ImagekitURLExport =
          "https://ik.imagekit.io/eawrckp8wfi/GitSpace/gitspace-logo-with-title-landscape_3jbeOUvjS.png?updatedAt=1630749744665";
        break;
      case "gitspace-logo-with-title-square":
        ImagekitURLExport =
          "https://ik.imagekit.io/eawrckp8wfi/GitSpace/gitspace-logo-with-title-square_ixZzXObuZ.png?updatedAt=1630749745593";
        break;
      default:
        console.log(
          "Imagekit image export method warning, default method is being executed, check the parameters"
        );
        ImagekitURLExport =
          "https://ik.imagekit.io/eawrckp8wfi/GitSpace/gitspaces-logo_D_ujqzlnS.png?updatedAt=1630749747348";
        break;
    }
  } else {
    console.warn(
      `Warning: Imagekit export is not being used properly, parameters (${image_id}, ${image_filetype}) are not in usage.`
    );
  }
  return ImagekitURLExport;
}
