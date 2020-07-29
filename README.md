# Fractals with Chaos Game

### Fractal patterns are created using chaos game

### Details for all fractals can be found at the bottom.

Made with JavaScript and visualized with the p5.js library

**Most general definition:** <br> There are fixed vertices which can be defined by the vertices of a shape, for example a triangle. One vertex is chosen as the starting point then another random vertex is chosen. The midpoint is found between the two points and a dot is drawn there. This midpoint becomes the new starting point and another vertex is chosen at random. The midpoint is then found again and a dot is drawn. A pattern appears as these steps continue. This algorithm creates fractals such as: the Sierpinski Triangle, Sierpinski Carpet and Vicsek Fractal. From a seemingly random algorithm, interesting fractals appear.

**With 3 vertices, a Sierpinski Triangle forms:** <br> <img src="assets/triangle/sierpinskiTriangle.gif" width="300px">

**Other interesting results may arrise when more restrictions are placed, vertices are added and the jump deviates from the midpoint** <br>

---

**Restricted Regions**

<img src="assets/region/nike.gif" width="270"><img src="assets/region/pi.gif" width="270px"><img src="assets/region/treble-clef.gif" width="270px"><br> The area in the centre is restricted for these fractals. Points cannot be placed within the central symbol which also prevents them from existing within the smaller ones. This creates a fractal pattern of symbols. Any symbol can be used.

---

**Restricted Movement**

<img src="assets/square/consecutiveRepitition.gif" width="270px"><img src="assets/square/diagonal.gif" width="270px"><img src="assets/square/onePositionAntiClockwise.gif" width="270px"><br> Restrictions are set for what the next point can be based on what the previously chosen point was.

---

**Additional Vertices & Non-midpoint Jumps**

<img src="assets/square/sierpinskiCarpet.gif" width="300px"><img src="assets/square/vicsekFractal.gif" width="300px"><br> New verticies are added and the distance travelled to the next chosen point is not exactly at the midpoint.

---

**Five Vertices are Chosen in the Shape of a Pentagon**

<img src="assets/pentagon/consecutiveRepitition.gif" width="300px"><img src="assets/pentagon/inversePhi.gif" width="300px"><br> On the left, the chosen point cannot be chosen again in the next iteration. On the right, the point jumps a distance 1 / PHI to the chosen point.

---

| Result | Restriction |
| --- | --- |
| <img src="assets/triangle/sierpinskiTriangle.gif" width="300px"> | **Sierpinski Triangle:**<br>3 vertices |
| <img src="assets/region/nike.gif" width="300" align="left"> | Points cannot be placed within the Nike logo |
| <img src="assets/region/pi.gif" width="300px"> | Same as above but a Pi symbol is used |
| <img src="assets/region/treble-clef.gif" width="300px"> | Same as above but a treble clef is used |
| <img src="assets/square/consecutiveRepitition.gif" width="300px"> | The chosen point cannot be chosen again in the next iteration |
| <img src="assets/square/diagonal.gif" width="300px"> | The chosen point cannot be diagonal from the previous point |
| <img src="assets/square/onePositionAntiClockwise.gif" width="300px"> | The point chosen cannot be ajacent and anti-clockwise to the previous point |
| <img src="assets/square/sierpinskiCarpet.gif" width="300px"> | **Sierpinski Carpet:**<br>The point jumps 2/3 of the way to the chosen point<br>The midpoints along the edges are considered vertices |
| <img src="assets/square/vicsekFractal.gif" width="300px"> | **Vicsek Fractal:**<br>The point jumps 2/3 of the way to the chosen point<br>The centre is also considered a vertex |
| <img src="assets/pentagon/consecutiveRepitition.gif" width="300px"> | The chosen point cannot be chosen again in the next iteration (5 vertices) |
| <img src="assets/pentagon/inversePhi.gif" width="300px"> | The point jumps 1/PHI of the way to the chosen point |

<br>
<br>
<br>

Sources: <br> https://en.wikipedia.org/wiki/Chaos_game
