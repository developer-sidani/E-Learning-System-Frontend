import React from 'react'

const TermsOfUseComponent = ({ data }) => (
  <div className="px-20 bg-gray-100 py-5 pb-20">
    <p className="font-extrabold text-3xl md:text-5xl mb-8">
           <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#0A003C] to-[#9C4DF4]">
                Terms of use
           </span>
    </p>

    <ol className="text-1xl list-decimal">
      {data?.overview}
      {data?.sections?.map((section, index) => (
        <div key={index}>
          <li className="text-2xl font-bold text-[#0A003C] my-8">{section.title}</li>
          <p>{section.description}</p>
          {section?.subsection && (
            <ul className="list-disc my-8">
              {section?.subsection?.map((x, i) => (
                <div key={i}>
                  <li className="text-1xl font-extrabold text-[#0A003C] list-inside">{x?.title}</li>
                  <p>{x?.description}</p>
                </div>

              ))}
            </ul>
          )}
        </div>
      ))}
    </ol>
  </div>
)

export default TermsOfUseComponent
