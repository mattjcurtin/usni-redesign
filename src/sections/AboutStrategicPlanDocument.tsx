/**
 * The plan document itself.
 *
 * Mirrors the current page's Scribd embed, but gives it a labelled full-width
 * placement on the light blue band instead of dropping an untitled viewer into
 * the middle of the foreword.
 */
export default function AboutStrategicPlanDocument() {
  return (
    <section className="py-16 lg:py-20 bg-[#ebf4ff]" aria-labelledby="plan-document-heading">
      <div className="container-site flex flex-col gap-8">
        <h2
          id="plan-document-heading"
          className="font-headline text-4xl lg:text-5xl text-navy-bolder leading-[1.1]"
        >
          Explore the Strategic Plan 2030
        </h2>

        <div className="w-full bg-white border border-navy-subtle">
          <iframe
            className="scribd_iframe_embed w-full h-[600px] lg:h-[760px] block"
            title="Strategic Plan 2030"
            src="https://www.scribd.com/embeds/883940012/content?start_page=1&view_mode=slideshow&access_key=key-mSQN5j3dyw9TVrCbjeCi"
            tabIndex={0}
            data-auto-height="true"
            data-aspect-ratio="1.28125"
            scrolling="no"
            frameBorder="0"
          />
        </div>
      </div>
    </section>
  )
}
