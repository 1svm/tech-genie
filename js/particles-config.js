$('#particles-js').particleground({
    minSpeedX: 0.1,
    maxSpeedX: 0.5,
    minSpeedY: 0.1,
    maxSpeedY: 0.5,
    directionX: 'center', // 'center', 'left' or 'right'. 'center' = dots bounce off edges
    directionY: 'center', // 'center', 'up' or 'down'. 'center' = dots bounce off edges
    density: 10000, // How many particles will be generated: one particle every n pixels
    dotColor: '#b3c2bf',
    lineColor: '#b3c2bf',
    particleRadius: 7, // Dot size
    lineWidth: 1,
    curvedLines: false,
    proximity: 100, // How close two dots need to be before they join
    parallax: true,
    parallaxMultiplier: 7 // The lower the number, the more extreme the parallax effect
});