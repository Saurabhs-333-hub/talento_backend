class AppwriteConstants {
    static appwriteUrl = 'https://cloud.appwrite.io/v1';
    static projectId = '65e383b2d13acfe63484';
    static databaseId = '65e384aa4f3ab5297360';
    static appwriteApiKey = '8acc70cd86139f495650f9ef82423cda600fe4f05141591f1b2f6b345a4c83c40c79713c852ec92aa27e1b4a77c00596bb5dad522d4e1832c4d432d4599ba398d1fdaf103263729d85e253eaf94c075b2f7e6e3cb2949146e78f9a2e277fc90816ae2da1f4549128dd365c37c7f8e33ca31e76dd8be4560f2cf49a4afa2a07f6';

    static collectionIdUsers = '65e3851ca00141c867be';
    static collectionIdSongs = '663367d2002c0e408027';
    static collectionIdVideos = '65e3cb6ac36db060b51a';
    static collectionIdImages = '65e3cbf2e5fcadc6c36a';
    static collectionIdThoughts = '663abbd40015b342b77f';
    static collectionIdPosts = '667fe8a400102ca96611';
    static collectionIdChannels = '664291b900329ebfa775';
    static collectionIdPlayLists = '664aee99000fb53b4ce5';
    static collectionIdLikes = '6649b3cc0025072c2222';
    static collectionIdComments = '664a0b80001386b7c2bc';
    static collectionIdFans = '66a3dc860024f5bd721b';
    static collectionIdFollowers = '66a3e0820022a098b22a';

    static collectionIdMessages = '6673837a0022ba3c758e';
    static collectionIdChats = '668cd151001a49ed0814';
    static collectionIdGlimpses = '66907b650030b3dc12ed';
    static collectionIdCategories = '65e45befb1fea1323a5c';
    static collectionIdSubcategories = '65e0f7d30c5c704ca29c';
    static collectionIdSellers = '65e44abc80ce341019cd';
    static collectionIdProducts = '65e44b1f0c5c7084f5f4';
    static collectionIdOrders = '65e44b1f0c5c7084f5f4';
    static collectionIdCarts = '65e44b1f0c5c7084f5f4';
    static collectionIdSubscribers = '6658cc4c00138f22b610';
    static collectionIdUserSettings = '666063110016d339d51c';

    static collectionIdPost = '';
    static collectionIdLike = '';
    static collectionIdComment = '';

    static bucketNameImages = 'images';
    static bucketNameVideos = 'videos';

    static bucketIdImages = '65e3cb53c0f3e0c71a65';
    static bucketIdVideos = '65e3cb1509c79f706d61';

    static placeholderDeafultImageId = '65be6276d0f1ce53eb4e';
    static placeholderDeafultImageUrl = 'https://images.unsplash.com/photo-1540324155974-7523202daa3f?q=80&w=1915&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
    static imageUrl = (imageId) =>
        `${this.appwriteUrl}/storage/buckets/${this.bucketIdImages}/files/${imageId}/view?project=${this.projectId}&mode=admin`;

    static videoUrl = (videoId) =>
        `${this.appwriteUrl}/storage/buckets/${this.bucketIdVideos}/files/${videoId}/view?project=${this.projectId}&mode=admin`;

}

export default AppwriteConstants;