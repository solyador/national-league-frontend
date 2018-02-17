export const TEAM_HELPER = {
  getGroups(teams) {
    let i = 0;
    let nfcWest = [];
    let nfcEast = [];
    let nfcNorth = [];
    let nfcSouth = [];
    let afcWest = [];
    let afcNorth = [];
    let afcSouth = [];
    let afcEast = [];
    for (i = 0; i < 32; i++) {
      switch (teams[i].conference + teams[i].division) {
        case "NFCEAST":
          nfcEast.push(teams[i]);
          break;
        case "NFCWEST":
          nfcWest.push(teams[i]);
          break;
        case "NFCNORTH":
          nfcNorth.push(teams[i]);
          break;
        case "NFCSOUTH":
          nfcSouth.push(teams[i]);
          break;
        case "AFCEAST":
          afcEast.push(teams[i]);
          break;
        case "AFCWEST":
          afcWest.push(teams[i]);
          break;
        case "AFCNORTH":
          afcNorth.push(teams[i]);
          break;
        case "AFCSOUTH":
          afcSouth.push(teams[i]);
          break;
        default:
          console.log("");
      }
    }
    let nfc = [nfcNorth, nfcSouth, nfcEast, nfcWest];
    let afc = [afcNorth, afcSouth, afcEast, afcWest];
    return [afc, nfc];
  }
};
