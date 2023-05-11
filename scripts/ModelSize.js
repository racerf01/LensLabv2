var ModelSizeBigScreen = 0

function CalculateModelSizeBigScreen (currentX_Distance, currentX_Focal) {
    ModelSizeBigScreen = currentX_Focal/20 + currentX_Distance/20;
    console.log("ModelSizeBigScreen", ModelSizeBigScreen);
    console.log("currentX_Focal", currentX_Focal);
    console.log("currentX_Distance", currentX_Distance);
    return ModelSizeBigScreen;
}


