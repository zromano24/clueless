import { Injectable } from '@angular/core';

import "snapsvg-cjs";
declare var Snap: any;

import * as _ from "lodash";
import { Suspects, Weapons } from "../share/constants";

@Injectable({
  providedIn: 'root'
})
export class GameBoardService {

  constructor() { }

  initBoard() {
    var board = Snap("#board");

    Snap.load("assets/board.svg", function(data) {
      var rooms = data.selectAll("#Outlines *");
      var hallways = data.selectAll("#Hallways *");
      var suspects = data.selectAll("#Suspects *");
      var weapons = data.selectAll("#Weapons *");
      var labels = data.select("#Labels");

      rooms.forEach(function(room) {
        room.mouseover(function() {
          this.animate({ fill: "#CFD8DC" }, 200);
        }).mouseout(function() {
          this.animate({ fill: "#ffffff" }, 200);
        });
      });

      hallways.forEach(function(hallway) {
        hallway.mouseover(function() {
          this.animate({ fill: "#bada55" }, 200);
        }).mouseout(function() {
          this.animate({ fill: "#707070" }, 200);
        });
      });

      suspects.forEach(function(suspect) {
        var suspectId = suspect.attr("id");
        var suspectIndex = _.map(Suspects, "id").indexOf(suspectId);
        var position = Suspects[suspectIndex].board.split(",").map(Number);

        // Save the original transform values (tx, ty) and new value when element is moved to 0,0 (tx0, ty0)
        var transform = suspect.attr("transform").localMatrix;
        suspect.attr({
          tx: transform.e, ty: transform.f,
          tx0: transform.e - (position[1] * 50),
          ty0: transform.f - (position[0] * 50)
        });
      });

      weapons.forEach(function(weapon) {
        var weapondId = weapon.attr("id");
        var weaponIndex = _.map(Weapons, "id").indexOf(weapondId);
        var position = Weapons[weaponIndex].position.split(",").map(Number);

        // Save the original transform values (tx, ty) and new value when element is moved to 0,0 (tx0, ty0)
        var transform = weapon.attr("transform").localMatrix;
        weapon.attr({
          tx: transform.e, ty: transform.f,
          tx0: transform.e - (position[1] * 50),
          ty0: transform.f - (position[0] * 50)
        });
      });

      // Fix positioning of labels
      var labelTransform = labels.attr("transform").localMatrix;
      labels.transform("t" + (labelTransform.e - 4) + "," + labelTransform.f);
      labels.attr({
        tx: labelTransform.e, ty: labelTransform.f,
      })

      board.append(data);
    });
  }

  movePlayer(name: string, x: number, y: number) {
    var board = Snap("#board");
    var suspectIndex = _.map(Suspects, "name").indexOf(name);
    var suspect = board.select("#" + Suspects[suspectIndex].id);

    if (suspect) {
      var positionX = Number(suspect.attr("tx0")) + (y * 50);
      var positionY = Number(suspect.attr("ty0")) + (x * 50);

      suspect.transform("t" + positionX + "," + positionY);
    }
  }

  moveWeapon(name: string, x: number, y: number) {
    var board = Snap("#board");
    var weaponIndex = _.map(Weapons, "name").indexOf(name);
    var weapon = board.select("#" + Weapons[weaponIndex].id);

    if (weapon) {
      var positionX = Number(weapon.attr("tx0")) + (y * 50);
      var positionY = Number(weapon.attr("ty0")) + (x * 50);

      weapon.transform("t" + positionX + "," + positionY);
    }
  }
}
