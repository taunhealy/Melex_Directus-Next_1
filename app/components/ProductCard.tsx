const assetsUrl = process.env.NEXT_PUBLIC_ASSETS_URL

export default function PostCard({title, thumbnail}) {
    return (
        <div className="max-w-xs rounded overflow-hidden shadow-lg my-2">
            <img className="w-full" src={`${assetsUrl}/${thumbnail}`} alt="Sunset in the mountains" />
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">{title}</div>
                    <p className="text-grey-darker text-base">
                        {title}
                    </p>
                </div>
        </div>
)
}
