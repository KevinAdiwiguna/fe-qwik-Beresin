import Carpet from '~/media/image/carpet.png?jsx'
import Bed from '~/media/image/bed.png?jsx'
import Sofa from '~/media/image/sofa.png?jsx'
import Toilet from '~/media/image/toilet.png?jsx'



interface SERVICESPROPS {
    image: any,
    title: string,
    description: string
}

export const SERVICES: SERVICESPROPS[] = [
    {
        image: Carpet,
        title: "Carpet Cleaning",
        description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem"
    },
    {
        image: Bed,
        title: "Bed Room Cleaning",
        description: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur"
    },
    {
        image: Sofa,
        title: "Sofa Cleaning",
        description: "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born"
    },
    {
        image: Toilet,
        title: "Toilet Cleaning",
        description: "The standard chunk of Lorem Ipsum used since the 1500s"
    },
]