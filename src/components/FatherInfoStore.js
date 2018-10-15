import React, { Component } from "react";
import { observerable } from "mobx-react";
import { observable } from "mobx";

class FatherInfoStore {
@observable user = []
}

const store = window.store = new FatherInfoStore

export default stores