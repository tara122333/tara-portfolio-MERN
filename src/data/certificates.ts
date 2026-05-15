export interface Certificate {
  id: string
  title: string
  issuer: string
  date: string
  description: string
  credentialId?: string
  image: string
  pdf: string
  tag?: string
}

export const certificates: Certificate[] = [
  {
    id: 'skillvertex-app-dev',
    title: 'App Development · Internship Completion',
    issuer: 'SkillVertex × Artifintel',
    date: 'Aug — Sep 2022',
    description:
      'Successfully completed live App Development projects with Artifintel in association with SkillVertex.',
    credentialId: 'RA173340',
    image: '/certificate/TarachandSkillVertex.png',
    pdf: '/certificate/TarachandSkillVertex.pdf',
    tag: 'Internship',
  },
  {
    id: 'saasdekho-web-dev',
    title: 'Web Development · Internship',
    issuer: 'SaaSDekho (Eruditeinfo Techsolutions)',
    date: 'Jul — Aug 2022',
    description:
      'Internship at SaaSDekho focused on Web Development — building production-grade features for the platform.',
    image: '/certificate/TarachandSaasDekhocertificate.png',
    pdf: '/certificate/TarachandSaasDekhocertificate.pdf',
    tag: 'Internship',
  },
  {
    id: 'skillvertex-campus',
    title: 'Certificate of Appreciation · Campus Executive',
    issuer: 'SkillVertex',
    date: 'Apr — May 2022',
    description:
      'Recognized for outstanding performance and dedication as a Campus Executive at SkillVertex.',
    image: '/certificate/TarachandAppDevelopment.png',
    pdf: '/certificate/TarachandAppDevelopment.pdf',
    tag: 'Appreciation',
  },
  {
    id: 'tcs-ion-career-edge',
    title: 'TCS iON Career Edge · Young Professional',
    issuer: 'Tata Consultancy Services',
    date: 'Aug — Sep 2021',
    description:
      'Completed TCS iON Career Edge covering communication, business etiquette, IT fundamentals, and AI overview.',
    credentialId: '119854-19062402-1016',
    image: '/certificate/TarachandTcscertificate.png',
    pdf: '/certificate/TarachandTcscertificate.pdf',
    tag: 'Achievement',
  },
]
