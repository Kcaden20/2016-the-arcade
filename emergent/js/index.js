var cyclic = new terra.Terrarium(200, 200);

terra.registerCA({
  type: 'cyclic',
  colors: ['238,130,238,1', '218,112,214,1', '255,0,255,1', '186,85,211,1', '153,50,204,1', '148,0,211,1', '139,0,139,1', '128,0,128,1', '75,0,130,1', '102,51,153,1', '138,43,226,1', '72,61,139,1', '106,90,205,1', '123,104,238,1', '255,192,203,1', '255,182,193,1'],
  colorFn: function () { return this.colors[this.state];},
   process: function (neighbors, x, y) {
    var next = (this.state + 1) % 4;
    var changing = neighbors.some(function (spot) {
      return spot.creature.state === next;
    });
    if (changing) this.state = next;
    return true;
  }
}, function () {
  this.state = Math.floor(Math.random() * 600);
});

cyclic.grid = cyclic.makeGrid('cyclic');
cyclic.animate(200);