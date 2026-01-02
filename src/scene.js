export const scenes = [
  {
    id: "lobby",
    image: "/panos/lobby.jpg",
    hotspots: [
      { id: "to-hall", position: [100, 0, -200], targetSceneId: "hallway" },
      { id: "to-room5", position: [-120, 0, -150], targetSceneId: "room5" },
    ],
    annotations: [
      {
        id: "fire-exit",
        position: [50, -20, -180],
        title: "Emergency Exit",
        description: "Leads to stairwell"
      }
    ]
  },
  {
    id: "hallway",
    image: "/panos/hallway.jpg",
    hotspots: [
      { id: "to-lobby", position: [0, 0, 200], targetSceneId: "lobby" },
      { id: "to-room5", position: [-150, 0, -100], targetSceneId: "room5" },
    ],
    annotations: []
  },
  {
    id: "room5",
    image: "/panos/room5.jpg",
    hotspots: [
      { id: "to-lobby", position: [0, 0, 150], targetSceneId: "lobby" },
      { id: "to-hall", position: [150, 0, -100], targetSceneId: "hallway" },
    ],
    annotations: [
      {
        id: "bed-info",
        position: [60, -10, -120],
        title: "Queen Bed",
        description: "Comfortable king size mattress"
      }
    ]
  }
];
