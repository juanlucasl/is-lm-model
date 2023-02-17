/* SPDX-License-Identifier: Apache-2.0 */
import "./FunctionsDrawer.css";
import React, { useRef, useEffect } from "react";
import { GRAPH_SIZE } from "../../constants";
import { FunctionFormula } from "../../models";

interface FunctionsDrawerProps {
  functionsToDraw: FunctionFormula[];
  verticalAxisLabel?: string;
  horizontalAxisLabel?: string;
}

const colors = ["blue", "red", "green"];

/**
 * Receives the y coordinates of two functions at a horizontal point and returns true
 * if they intersect.
 *
 * The point is considered an intersection point between the functions if the difference
 * between y coordinates of each function at the point is lesser than 1.
 *
 * @param y1
 * @param y2
 */
const functionsDoIntersect = (y1: number, y2: number) => Math.abs(y1 - y2) < 1;

/**
 * Takes in an array of functionsToDraw and displays them on a canvas.
 *
 * @constructor
 */
const FunctionsDrawer: React.FC<FunctionsDrawerProps> = ({
  functionsToDraw,
  verticalAxisLabel = "Y",
  horizontalAxisLabel = "X",
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;

    // Draw the functions
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    functionsToDraw.forEach((functionFormula, i) => {
      ctx.beginPath();
      ctx.moveTo(0, canvas.height - functionFormula(0));
      for (let j = 0; j <= canvas.height; j++) {
        ctx.lineTo(j, canvas.height - functionFormula(j));
      }

      // Set the color of the function using the index
      ctx.strokeStyle = colors[i % colors.length];

      ctx.stroke();
    });

    // Find the intersection points between functions
    for (let i = 0; i < functionsToDraw.length - 1; i++) {
      for (let j = i + 1; j < functionsToDraw.length; j++) {
        // Iterates through the horizontal axis of the canvas to check each horizontal pixel to
        // see if there is an intersection
        for (let horizontalPoint = 0; horizontalPoint <= canvas.width; horizontalPoint++) {
          // Calculate Y coordinate of each function at each point.
          const y1 = canvas.height - functionsToDraw[i](horizontalPoint);
          const y2 = canvas.height - functionsToDraw[j](horizontalPoint);
          if (functionsDoIntersect(y1, y2)) {
            // Set line style to be dotted and gray.
            ctx.strokeStyle = "gray";
            ctx.setLineDash([5, 5]);

            // Draw a line from the intersection point to the horizontal axis by moving the
            // draw path to the intersection (ctx.moveTo(horizontalPoint, y1)) and drawing a
            // line to the bottom of the canvas (ctx.lineTo(horizontalPoint, canvas.height))
            ctx.beginPath();
            ctx.moveTo(horizontalPoint, y1);
            ctx.lineTo(horizontalPoint, canvas.height);
            ctx.stroke();
            ctx.closePath();

            // Draw a line from the intersection point to the vertical axis by moving the path
            // to the intersection (ctx.moveTo(horizontalPoint, y1)) and drawing a line to the
            // left edge of the canvas (ctx.lineTo(0, y1))
            ctx.beginPath();
            ctx.moveTo(horizontalPoint, y1);
            ctx.lineTo(0, y1);
            ctx.stroke();
            ctx.closePath();

            // Reset style back to a solid line
            ctx.setLineDash([]);
          }
        }
      }
    }

    // Draw the axis labels
    ctx.font = "1.6rem sans-serif";
    ctx.fillText(verticalAxisLabel, 10, 15);
    ctx.fillText(horizontalAxisLabel, canvas.width - 15, canvas.height - 10);
  }, [functionsToDraw, horizontalAxisLabel, verticalAxisLabel]);

  return (
    <canvas
      aria-label="IS-LM"
      className="functions-drawer"
      height={GRAPH_SIZE}
      width={GRAPH_SIZE}
      ref={canvasRef}
      role="img"
    />
  );
};

export default FunctionsDrawer;
