import sushi from "../assets/sushi.svg";
import menu from "../assets/menu.svg";
import right_icon from "../assets/right_icon.svg";












export const dummyAnime = [
    {
        id: 1,
        title: { romaji: "Naruto" },
        description: "A young ninja striving to be Hokage.",
        coverImage: { large: "https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781974740932/naruto-shippuden-the-official-coloring-book-9781974740932_hr.jpg" },
        bannerImage: "https://i.pinimg.com/1200x/8e/4c/0b/8e4c0b2516c227d8e27ee187e7a2a9dc.jpg",
        format: "TV",
        trending: true,
        type: "sub",
        updatedAt: "2025-09-27T10:00:00Z",
        trailer: { id: "h6zTg", site: "youtube", thumbnail: "https://i.imgur.com/jkFGt.jpg" }
    },
    {
        id: 2,
        title: { romaji: "One Piece" },
        description: "Monkey D. Luffy sails to find the legendary treasure.",
        coverImage: { large: "https://i.pinimg.com/236x/1a/c2/7b/1ac27be9de6c71dbf7000280bdcde2af.jpg" },
        bannerImage: "https://wallpapers.com/images/hd/one-piece-characters-banner-wozhh2vhsckkzm3l.jpg",
        format: "TV",
        trending: true,
        type: "dub",
        updatedAt: "2025-09-26T14:00:00Z",
        trailer: { id: "2W1i7", site: "youtube", thumbnail: "https://i.imgur.com/q1gWr.jpg" }
    },
    {
        id: 3,
        title: { romaji: "Attack on Titan" },
        description: "Humanity fights for survival against giant Titans.",
        coverImage: { large: "https://i.pinimg.com/736x/81/f5/c9/81f5c9a8f206b2b4389adb25625b02cf.jpg" },
        bannerImage: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/14bb8561-cee7-47a2-a86b-8e1c292ceba5/d744aby-595975de-e5be-4583-942f-2b4218e60bb7.png",
        format: "TV",
        trending: false,
        type: "sub",
        updatedAt: "2025-09-20T09:30:00Z",
        trailer: { id: "MGRm4IzK1SQ", site: "youtube", thumbnail: "https://i.imgur.com/43sTt.jpg" }
    },
    {
        id: 4,
        title: { romaji: "Death Note" },
        description: "A notebook grants the power to kill anyone by writing their name.",
        coverImage: { large: "https://upload.wikimedia.org/wikipedia/en/6/6f/Death_Note_Vol_1.jpg" },
        bannerImage: "https://i.pinimg.com/1200x/89/3e/b1/893eb1cf4285b84e2487decfe1214e73.jpg",
        format: "TV",
        trending: true,
        type: "dub",
        updatedAt: "2025-09-23T18:45:00Z",
        trailer: { id: "NlJZ-YgAt-c", site: "youtube", thumbnail: "https://i.imgur.com/8Lghc.jpg" }
    },
    {
        id: 5,
        title: { romaji: "Fullmetal Alchemist: Brotherhood" },
        description: "Two brothers search for the Philosopher’s Stone.",
        coverImage: { large: "https://upload.wikimedia.org/wikipedia/en/7/7e/Fullmetal_Alchemist_Brotherhood_key_visual.png" },
        bannerImage: "https://i.ebayimg.com/images/g/6AUAAOSw6lFe7xxc/s-l1200.jpg",
        format: "TV",
        trending: false,
        type: "both",
        updatedAt: "2025-09-01T12:00:00Z",
        trailer: { id: "o3V-GvvzjE4", site: "youtube", thumbnail: "https://i.imgur.com/AJ3hQ.jpg" }
    },
    {
        id: 6,
        title: { romaji: "Demon Slayer" },
        description: "Tanjiro seeks a cure for his sister while fighting demons.",
        coverImage: { large: "https://cdn.mobygames.com/covers/10269773-demon-slayer-kimetsu-no-yaiba-the-hinokami-chronicles-xbox-one-f.jpg" },
        bannerImage: "https://i.pinimg.com/1200x/5d/bf/92/5dbf92ffa24c50556691db4a8af7f998.jpg",
        format: "TV",
        trending: true,
        type: "sub",
        updatedAt: "2025-09-27T08:15:00Z",
        trailer: { id: "VQGCKyvzIM4", site: "youtube", thumbnail: "https://i.imgur.com/mn8Ht.jpg" }
    },
    {
        id: 7,
        title: { romaji: "Jujutsu Kaisen" },
        description: "Yuji Itadori becomes host to a dangerous curse.",
        coverImage: { large: "https://m.media-amazon.com/images/I/71Wnxg6OJaL._UF894,1000_QL80_.jpg" },
        bannerImage: "https://i.pinimg.com/736x/28/ef/40/28ef40e53d0036c906c3f7ce5445754f.jpg",
        format: "TV",
        trending: false,
        type: "dub",
        updatedAt: "2025-09-15T16:30:00Z",
        trailer: { id: "fFFnGSYVmbc", site: "youtube", thumbnail: "https://i.imgur.com/r2gsh.jpg" }
    },
    {
        id: 8,
        title: { romaji: "My Hero Academia" },
        description: "In a world of heroes, Izuku Midoriya trains to be the greatest.",
        coverImage: { large: "https://static1.cbrimages.com/wordpress/wp-content/uploads/2021/06/My-Hero-Academia---Official-Poster---Season-2-Compilation.jpg" },
        bannerImage: "https://i.pinimg.com/1200x/b0/2e/d7/b02ed7c7dc7c17ad67c81b4cfe60f51c.jpg",
        format: "TV",
        trending: true,
        type: "both",
        updatedAt: "2025-09-25T11:00:00Z",
        trailer: { id: "EPVkcwyLQQ8", site: "youtube", thumbnail: "https://i.imgur.com/X2Ljk.jpg" }
    },
    {
        id: 9,
        title: { romaji: "Tokyo Ghoul" },
        description: "Ken Kaneki becomes half-ghoul after a fateful encounter.",
        coverImage: { large: "https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781421580463/tokyo-ghoul-vol-11-9781421580463_hr.jpg" },
        bannerImage: "https://tokyoghoul.b-cdn.net/wp-content/uploads/2021/02/top-latest-tokyo-ghoul-poster.jpg",
        format: "TV",
        trending: false,
        type: "sub",
        updatedAt: "2025-09-19T09:00:00Z",
        trailer: { id: "vGuQeQsoRgU", site: "youtube", thumbnail: "https://i.imgur.com/PsoqF.jpg" }
    },
    {
        id: 10,
        title: { romaji: "Dragon Ball Z" },
        description: "Goku and his friends defend Earth from powerful foes.",
        coverImage: { large: "https://i.redd.it/faelooq2uype1.jpeg" },
        bannerImage: "https://i.pinimg.com/1200x/5e/d4/c6/5ed4c6c1286d9252381c3a958de5d7a5.jpg",
        format: "TV",
        trending: true,
        type: "dub",
        updatedAt: "2025-09-27T06:45:00Z",
        trailer: { id: "sxufB6DxXk0", site: "youtube", thumbnail: "https://i.imgur.com/4PshX.jpg" }
    }
];








export const  assets={sushi, menu, right_icon, dummyAnime };