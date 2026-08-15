import Icon from './Icon'

const impacts = [
  {
    title: 'Accidents',
    text: "Chaque jour, des victimes ont besoin de transfusions en urgence.",
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDAUPs6CyqkF8hYPeGtbezb048EdKGNYFPjkbmGyuv1G9rMbebF9rN-IMywARbM7BPEQ84dua5npV3m1MC-jxMBwEIUOJd4AoqRrkPcpIA6TOwPhTBIMZE1GQYG-SqcmpIXIUrWEd9GL7uItMa1oUNjOpSppsXzMDBcmYhESYLqYtXHQZ3pgnEifUwuUM4i2WUhg8HgcDMFJYz-3DWXYZtWSsGcp4pUrxivALhvlnNFQ8s5rqGNovaN',
  },
  {
    title: 'Chirurgies',
    text: "De nombreuses interventions chirurgicales nécessitent des produits sanguins.",
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC0YqY3BbcAGVu-C_MKsA1DfA39zDhCffu1LU8MzQOhoRVUHXcoZbv0HPeRu-aNJbtXp2iI0mzKUxt-XtIgdKf522U_S0e1Yg9Rempws6EWzREQjokisO76loXyiYjJT5rVoiFMJWXlXpocsQ6q6rj0FMPJ7cFLFlzrJuzo-Oar4_MP0sAyopW8X9SeIEX78kCJQ-fLPRhhNDHxfS6z2mKwIu7B4MLJ_FW0U9SCOr3TVyXvIVyYT7-B',
  },
  {
    title: 'Maladies',
    text: "Certaines maladies du sang nécessitent des transfusions régulières.",
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCptelLRcg2Ikc6qfClRXQC_voBD8i3kqlVsVhF0tNlgtZCVJXqArnz16p24yEkP1-4-9njgFiiy3btCa3uSys3UASiwX_gGjqGhjiEWuYMIz0-dyGD-eWEuHBCcccxlCy_5reUkUlbD0W47VPijaXDJHcdNZtXFF_JsMGfS5R1YAELa0wqqpxJZS_-kkMZZu_ZesnYuyWOr190RArb5Uxgivcp8lFVjkgm6uWBb0-cV98JNzRddiMi',
  },
  {
    title: 'Maternité',
    text: "Des complications peuvent survenir avant, pendant ou après l'accouchement.",
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuApl-QJsX3u45DwM3I-C8AnmeZKD3knSsD1WukuOPVkZFuMwoJhWGAvznfLeTcRDgstz0w8tWjSIcEXugRuE1zcbVBDetRssfMg0O2D4qGC-QB3_ESb2ceo71kbG0T2UGr8QQ2HxEVIcFfnxZYcwIRGEtgndRn-BoBFUTDlgPwP2xrolD4ntzFlaIrr8MnbffTs_5546UhANPUMEgWlMFGiJY0MHAYkbI1IquVLz5AYzkOffnqUNznz',
  },
]

export default function PourquoiDonner() {
  return (
    <section id="pourquoi" className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto mb-section-gap">
      <div className="mb-12">
        <p className="font-label-caps text-label-caps text-primary mb-2">01. POURQUOI DONNER ?</p>
        <h2 className="font-headline-md text-headline-md text-on-background">
          Un don. Plusieurs vies touchées.
        </h2>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {impacts.map((impact) => (
          <div key={impact.title} className="space-y-4">
            <div className="aspect-square rounded-2xl overflow-hidden">
              <img alt={impact.title} className="w-full h-full object-cover" src={impact.img} />
            </div>
            <div className="flex items-center gap-2">
              <Icon name="favorite" className="text-primary text-sm" />
              <h3 className="font-body-md font-bold text-on-background">{impact.title}</h3>
            </div>
            <p className="font-body-sm text-sm text-on-surface-variant">{impact.text}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
