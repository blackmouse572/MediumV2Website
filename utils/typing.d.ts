export interface Post{
    _id: string;
    _createdAt: string;
    title: string;
    description: string;
    author: {
        name: string;
        image: string;
    };
    comments: Comment[];
    slug: {
        current: string;
    };
    mainImage: {
        asset: {
            url: string;
        }
    };
    body:[object];
}
export interface Comment {
    _id: string;
    name: string
    comment: string;
    title: string;
    email: string;
    aprroved: boolean;
    post: {
        _ref: string;
        _type: string;
    };
    _createdAt: string;
    _rev: string;
    _type: string;
    _updatedAt: string;
}