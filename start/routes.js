"use strict";

const Route = use("Route");

Route.post("/files", "FileController.store");
Route.get("/files/:id", "FileController.show");
