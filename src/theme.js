// Palette + curated (uPVC-only) placeholders
export const PALETTE = {
  cream: "#FCF7F1",
  linen: "#F6EFE7",
  cacao: "#4B3B2F",
  cacaoSoft: "#6B5646",
  caramel: "#C89B6F",
  caramelDark: "#A97E54",
  brass: "#B8864B",
  border: "#E8DCCD",
  ink: "#2b251f",
  shadow: "rgba(26,18,13,0.08)",
};

export const IMG = {
  hero:
    "https://images.unsplash.com/photo-1580610447944-0f9481db73b8?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0",
  heroInset:
    "https://images.unsplash.com/photo-1752829836344-79a48f76a1c4?q=80&w=938&auto=format&fit=crop&ixlib=rb-4.1.0",
  gallery: [
    "https://images.unsplash.com/photo-1752829836344-79a48f76a1c4?q=80&w=938&auto=format&fit=crop&ixlib=rb-4.1.0",
    "https://images.unsplash.com/photo-1752829836344-79a48f76a1c4?q=80&w=938&auto=format&fit=crop&ixlib=rb-4.1.0",
    "https://images.unsplash.com/photo-1752829836344-79a48f76a1c4?q=80&w=938&auto=format&fit=crop&ixlib=rb-4.1.0",
    "https://images.unsplash.com/photo-1545259741-2ea3ebf61fa8?q=80&w=1400&auto=format&fit=crop",
  ],
  prod: [
    // Casement Window
    "https://windowscanada-static-20250319.s3.ca-central-1.amazonaws.com/media/tinymce/2024/12/9/Casement%20Window%20Maintenance-min.jpg",
    // Sliding Window
    "https://5.imimg.com/data5/SELLER/Default/2024/5/416434316/YD/ZR/DT/19881412/upvc-sliding-window.jpeg",
    // Lift & Slide Door
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCGrvQ19ieJzJb6D0ANZAsKUN-WlonJy7eFw&s",
    // Tilt & Turn Window
    "https://cdn.shopify.com/s/files/1/0253/9179/2207/files/tilt_and_turn_window_generic_480x480.jpg?v=1707491855",
    // French Door
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSoj3TKdqgVLS8SoHet1sy1mzabIzf92c9hQ&s",
    // Entrance Door
    "https://tiimg.tistatic.com/fp/1/007/604/long-lasting-sleek-design-more-spacious-white-upvc-entrance-door-for-residential-use-758.jpg",
  ],
  textures: {
    paper: `data:image/svg+xml;utf8,
      <svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'>
        <rect width='200' height='200' fill='${PALETTE.cream}'/>
        <g opacity='0.08'>
          <circle cx='30' cy='40' r='1' fill='${PALETTE.cacao}'/>
          <circle cx='120' cy='120' r='1' fill='${PALETTE.cacao}'/>
          <circle cx='170' cy='85' r='1' fill='${PALETTE.cacao}'/>
          <circle cx='70' cy='150' r='1' fill='${PALETTE.cacao}'/>
          <circle cx='190' cy='30' r='1' fill='${PALETTE.cacao}'/>
        </g>
      </svg>`,
  },
};
