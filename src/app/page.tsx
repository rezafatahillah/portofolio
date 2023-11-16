import Head from 'next/head';
import Image from 'next/image';

import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faPhone, faEnvelope, faLocationPin, faUsers, faRing, faCalendar } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';


config.autoAddCss = false;
config.autoAddCss = false;

interface Company {
  companyname: string;
  image: string;
  fromyear: number;
  untilyear: number;
  location: string;
  phone: string;
  link: string;
}

interface Project {
  title: string;
  language: string;
  image: string;
  link: string;
  year: number;
  company: string;
}

interface Skill {
  skillname: string;
  category: string;
}

const groupBy = <T, K extends keyof T>(array: T[], key: K): Record<string, T[]> =>
  array.reduce((result: Record<string, T[]>, item) => {
    const keyValue = item[key] as string;
    (result[keyValue] = result[keyValue] || []).push(item);
    return result;
  }, {} as Record<string, T[]>);

export default function Page() {

  const companies: Company[] = [
    { companyname: 'Sure Indonesia', image: '/images/sure.png', fromyear: 2011, untilyear: 2012, location: 'Jl. Raya Cijengir Binong No.108, Binong, Kec. Curug, Kabupaten Tangerang, Banten 15810', phone: '021-59896148', link: 'https://sure-indonesia.com/' },
    { companyname: 'Seed Interactive', image: '/images/seed.png', fromyear: 2013, untilyear: 2014, location: 'The Prominence Blok - 38F | 48 CBD Alam Sutera Tangerang 15143', phone: '021-80821696 ', link: 'https://www.seed-interactive.com/' },
    { companyname: 'Computrade Technology Interanational (CTI Group)', image: '/images/cti.png', fromyear: 2014, untilyear: 2017, location: 'Centennial Tower 12th Floor Jl. Jend. Gatot Subroto Kav. 24-25 Jakarta 12930', phone: '021-80622222', link: 'https://computradetech.com/' },
    { companyname: 'Anugrah Tangkas Transportindo (ATT Group)', image: '/images/att.png', fromyear: 2018, untilyear: 2023, location: 'Taman Palem Lestari, Ruko Galaxy, Blok N No.27, RT.7/RW.8, Cengkareng Bar., Kecamatan Cengkareng, Kota Jakarta Barat', phone: '021-55951000', link: 'https://att-group.co.id/' },
  ];

  const skills: Skill[] = [
    { skillname: 'React Native', category: 'Mobile Development' },
    { skillname: 'Java Mobile', category: 'Mobile Development' },
    { skillname: 'Kotlin', category: 'Mobile Development' },
    { skillname: 'TypeScript', category: 'Mobile Development' },
    { skillname: 'Next.js', category: 'Web Development' },
    { skillname: 'PHP', category: 'Web Development' },
    { skillname: 'CodeIgniter', category: 'Web Development' },
    { skillname: 'Laravel', category: 'Web Development' },
    { skillname: 'HTML, CSS, JS', category: 'Web Development' },
    { skillname: 'Oracle', category: 'Database' },
    { skillname: 'MySQL', category: 'Database' },
    { skillname: 'MongoDB', category: 'Database' },
    { skillname: 'SQL', category: 'Database' },
    { skillname: 'C# / C Sharp', category: 'App Desktop' },
    { skillname: 'VB', category: 'App Desktop' },
  ];

  const projects: Project[] = [
    { title: 'Website Edugasing', language: '', image: '/screenshoot/suryaedugasing.png', link: 'http://www.kandel.co.id/seg/seg.html', year: 2012, company: 'Sure Indonesia' },
    { title: 'Website Sure Indonesia', language: '', image: '/screenshoot/sureindonesia.png', link: 'https://sure-indonesia.com/', year: 2012, company: 'Sure Indonesia' },
    { title: 'Company Profile Seed', language: '', image: '/screenshoot/seedinteractive.png', link: 'https://www.seed-interactive.com/', year: 2012, company: 'Seed Interactive' },
    { title: 'Morelo Kelong Resort', language: '', image: '/screenshoot/morelokelong.png', link: 'www.morelokelong.com', year: 2013, company: 'Seed Interactive' },
    { title: 'Sistem Parkir Sederhana', language: '', image: '/screenshoot/parkir.jpeg', link: '', year: 2013, company: 'Seed Interactive' },
    { title: 'ICIO Community', language: '', image: '/screenshoot/icio.png', link: 'https://ciocommunity.org/', year: 2014, company: 'CTI Group' },
    { title: 'IT Infrastructure Summit', language: '', image: '/screenshoot/itsummit.png', link: 'https://www.itinfrastructuresummit.com/', year: 2014, company: 'CTI Group' },
    { title: 'CTI Partner Kick Off', language: '', image: '/screenshoot/bpt.png', link: 'https://partnerkickoff.computradetech.com/', year: 2014, company: 'CTI Group' },
    { title: 'Company Profile CTI', language: '', image: '/screenshoot/computradetech.png', link: 'https://computradetech.com/', year: 2014, company: 'CTI Group' },
    { title: 'Company Profile Virtus ', language: '', image: '/screenshoot/virtus.png', link: 'https://www.virtusindonesia.com/en', year: 2015, company: 'CTI Group' },
    { title: 'Company Profile CDT ', language: '', image: '/screenshoot/cdt.png', link: 'https://centraldatatech.com/id/', year: 2015, company: 'CTI Group' },
    { title: 'Company Profile BPT ', language: '', image: '/screenshoot/bpt.png', link: 'https://www.bluepowertechnology.com/', year: 2015, company: 'CTI Group' },
    { title: 'Paradise Store', language: '', image: '/screenshoot/paradisestoreid.png', link: 'https://www.paradisestore.id/', year: 2018, company: 'CTI Group' },
    { title: 'Rumah LPK Web', language: '', image: '/screenshoot/rumahlpkweb.png', link: 'https://rumahlpk.com/', year: 2021, company: 'ATT Group' },
    { title: 'Rumah LPK Mobile (development)', language: '', image: '/screenshoot/rumahlpkmobile.png', link: 'https://www.figma.com/file/mhS4EsPK7V7t9rt0D5rDo5/Rumah-LPK?type=design&node-id=14095-174288&mode=design&t=XAJuASeMnINOYrlh-0#471035819', year: 2021, company: 'ATT Group' },
    { title: 'Website & Mobile Chando Himalaya (the permit was closed by the government)', language: '', image: '/screenshoot/chando.jpeg', link: '', year: 2019, company: 'ATT Group' },
    { title: 'PLI Archive', language: '', image: '/screenshoot/pliarchive.png', link: 'https://play.google.com/store/apps/details?id=com.archivepli', year: 2019, company: 'ATT Group' },
    { title: 'PLI Mobile', language: '', image: '/screenshoot/plimobile.png', link: 'https://play.google.com/store/apps/details?id=com.rezafatahillah.pliproject', year: 2020, company: 'ATT Group' },
    { title: 'PLI Web', language: '', image: '/screenshoot/pliweb.png', link: 'https://wakita.id/', year: 2022, company: 'ATT Group' },
    { title: 'Wakita Web', language: '', image: '/screenshoot/wakita.png', link: 'https://wakita.id/', year: 2023, company: 'ATT Group' },
    { title: 'Wakita Mobile', language: '', image: '/screenshoot/wakitamobile.png', link: 'https://play.google.com/store/apps/details?id=com.wacsnew', year: 2021, company: 'ATT Group' },

  ];

  // Group skills by category
  const skillsByCategory = groupBy(skills, 'category');

  // Group projects by company name
  const projectsByCompany = groupBy(projects, 'company');
  const sortedCompanies = Object.keys(projectsByCompany).sort();

  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>My Portfolio using Next.js 14</title>
      </Head>

      <section className="mb-8">
        <h1 className="text-4xl font-bold mb-4">My Portfolio</h1>

        {/* Gambar Profile */}
        <Image src="/images/reza.jpeg" alt="Reza Fatahillah" width={500} height={300} />

        {/* Detail Profile Information */}
        <div className="mt-4">
          <h2 className="text-xl font-bold mb-2">Detail Profile Information</h2>
          <div className="mt-4 flex">
            {/* Left Column - About Us */}
            <div className="w-1/2 pr-4">
              <h2 className="text-xl font-bold mb-2">About Me</h2>
              <p className="text-gray-700">
                I am someone who finds joy in adventurous pursuits, exploring the world, and challenging myself with new experiences. My interest in the realm of programming allows me to create and tackle various technical challenges. I have an affinity for all things related to engineering, from mechanics to coding.

                Moreover, Ive embarked on lifes journey alongside my family, adding depth and meaning to every step. I possess a strong sense of humor, believing that happiness is the key to leading a fulfilling life.

                I also take great pleasure in witnessing the amusing antics of my child each day. Their playful behavior adds a delightful and heartwarming dimension to my life.

                In addition to these aspects, I find fulfillment in broadening my perspectives through the activity of reading. Books serve as windows to boundless knowledge, opening doors to understanding the world from a broader standpoint. The combination of adventure, technology, family life, and the joy derived from my childs humorous escapades forms the diverse and gratifying foundation of my life.
              </p>
            </div>

            {/* Right Column - Profile Details */}
            <div className="w-1/2">
              <h2 className="text-xl font-bold mb-2">Contact Person</h2>
              <div className="flex items-center mb-2">
                <FontAwesomeIcon icon={faUser} className="mr-2 small-icon" style={{ fontSize: '0.875rem' }} />
                <span className="text-gray-700">Reza Fatahillah</span>
              </div>
              <div className="flex items-center mb-2">
                <FontAwesomeIcon icon={faLocationPin} className="mr-2 small-icon" style={{ fontSize: '0.875rem' }} />
                <span className="text-gray-700">Parung Panjang Kab.Bogor</span>
              </div>
              <div className="flex items-center mb-2">
                <FontAwesomeIcon icon={faEnvelope} className="mr-2 small-icon" style={{ fontSize: '0.875rem' }} />
                <span className="text-gray-700">fatahillah.reza@gmail.com</span>
              </div>
              <div className="flex items-center mb-2">
                <FontAwesomeIcon icon={faRing} className="mr-2 small-icon" style={{ fontSize: '0.875rem' }} />
                <span className="text-gray-700">Married & 1 Child</span>
              </div>
              <div className="flex items-center mb-2">
                <FontAwesomeIcon icon={faCalendar} className="mr-2 small-icon" style={{ fontSize: '0.875rem' }} />
                <span className="text-gray-700">09 November 1989 (34 Years)</span>
              </div>
              <div className="flex items-center">
                <FontAwesomeIcon icon={faLinkedin} className="mr-2 small-icon" style={{ fontSize: '0.875rem' }} />
                <span className="text-gray-700">https://www.linkedin.com/in/fatahillahreza/</span>
              </div>
            </div>
          </div>

        </div>

        {/* School Detail Information */}
        <div className="mt-4">
          <h2 className="text-xl font-bold mb-2">Education</h2>
          <div className="mt-4 flex">
            {/* Left side - Image */}
            <div className="mr-4">
              <Image
                src="/images/umn.png"
                alt="Universitas Multimedia Nusantara"
                width={140} // Set your desired width
                height={140} // Set your desired height
                className="object-cover rounded-md"
              />

            </div>

            {/* Right side - School Details */}
            <div>

              <div className="flex items-center mb-2">
                <span className="font-bold mr-2">University : </span>
                <p className="text-gray-700">Universitas Multimedia Nusantara (UMN)</p>
              </div>

              <div className="flex items-center mb-2">
                <span className="font-bold mr-2">Location : </span>
                <p className="text-gray-700">Jl. Boulevard, Gading Serpong, Kel. Curug Sangereng, Kec. Kelapa Dua, Kab. Tangerang,
                  Prop. Banten, Indonesia</p>
              </div>

              <div className="flex items-center mb-2">
                <span className="font-bold mr-2">Graduate : </span>
                <p className="text-gray-700">2013</p>
              </div>

              <div className="flex items-center mb-2">
                <span className="font-bold mr-2">Major : </span>
                <p className="text-gray-700">IT Oracle Administrator</p>
              </div>

              <div className="flex items-center">
                <span className="font-bold mr-2">Bachelor Degree : </span>
                <p className="text-gray-700">Bachelor Degree</p>
              </div>
            </div>
          </div>
        </div>


        {/* Skills Detail Information */}
        <div className="mt-4">
          <h2 className="text-2xl font-bold mb-2">Skills</h2>
          <div className="grid grid-cols-4 gap-4">
            {Object.entries(skillsByCategory).map(([category, categorySkills]) => (
              <div key={category}>
                <h3 className="text-xl font-bold mb-2">{category}</h3>
                <ul>
                  {categorySkills.map((skill) => (
                    <li key={skill.skillname} className="flex items-center mb-4">
                      <div>
                        <p className="text-gray-700">{skill.skillname}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Company Detail Information */}
        <div className="mt-4">
          <h2 className="text-2xl font-bold mb-2">My Carrier</h2>
          <ul>
            {companies.map((company) => (
              <li key={company.companyname} className="flex items-center mb-4">
                <div className="mr-4 bg-white rounded-md p-2" style={{ width: '140px', height: '140px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  <Image src={company.image} alt={company.companyname} width={100} height={50} className="rounded-md" />
                </div>


                <div>
                  <h3 className="text-xl font-bold mb-2">{company.companyname}</h3>
                  <p className="text-gray-700">
                    <strong>Years:</strong> {company.fromyear} - {company.untilyear} <br />
                    <strong>Location:</strong> {company.location} <br />
                    <strong>Telephone:</strong> {company.phone}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>

      </section>

      <section>
        {/* Projects Detail Information */}
        <div className="mt-4">
          <h2 className="text-2xl font-bold mb-4">Projects</h2>
          {sortedCompanies.map((company) => (
            <div key={company} className="mb-4">
              <h3 className="text-xl font-bold mb-2">{company}</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {projectsByCompany[company].map((project) => (
                  <li key={project.title} className="border p-4 rounded-md flex flex-col items-center">
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <div className="flex justify-center">
                      <Image src={project.image} alt={project.title} width={300} height={200} className="rounded-md" />
                    </div>
                    <p className="text-gray-700 mt-2">
                      <strong>Year:</strong> {project.year} | <strong>Company:</strong> {project.company}
                    </p>
                    <p className="text-gray-700 mt-2">
                      <a href={project.link} className="text-blue-500" target="_blank" rel="noopener noreferrer">
                        View Project
                      </a>
                    </p>
                  </li>

                ))}
              </ul>
            </div>
          ))}
        </div>

      </section>
    </div>
  );
}