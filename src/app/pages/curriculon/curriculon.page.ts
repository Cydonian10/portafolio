import { TitleCasePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-curriculom',
  standalone: true,
  imports: [TitleCasePipe],
  template: `
    <article class="cv max-w-[1100px] mx-auto p-4 md:p-8">
      <!-- Profile -->
      <div class="grid grid-cols-12 gap-4 mb-4">
        <section class="col-span-12 md:col-span-4 xl:col-span-3 h-[400px] overflow-hidden">
          <div>
            <img
              src="assets/mabel.jpg"
              class="w-full h-full object-cover rounded-tr-3xl rounded-bl-3xl mb-4"
            />
          </div>
        </section>
        <section class="col-span-12 md:col-span-8 xl:col-span-9 py-4 md:px-8">
          <!-- About -->
          <div>
            <h1 class="text-5xl md:text-7xl">Mabel Milagros</h1>
            <h1 class="text-5xl md:text-7xl font-bold">Benito Vargas</h1>
            <p class="md:text-2xl text-gray-500">Educacion Inicial</p>
          </div>
          <h3
            class="relative text-xl font-semibold py-4 tracking-[4px] before:absolute before:w-10 before:h-[2px] before:bg-gray-900 before:left-0 before:bottom-0 mb-2"
          >
            Perfil
          </h3>
          <p class="text-gray-500">
            PROFESIONAL DEL ÁREA DE EDUCACIÓN INICIAL. Egresado del I.E.S.P.P
            PEDRO MONGE CÓRDOVA el año 2022 con mucho entusiasmo ya que de mí va
            a depender la motivación de mi carrera, éste debe innovar, crear,
            mostrar empatía por las vivencias y ocurrencias de los niños y
            niñas, vivir cada día como si fuera una experiencia inolvidable y
            maravillosa.
          </p>
        </section>
      </div>

      <div class="grid grid-cols-12 gap-4 mb-4">
        <section class="col-span-12 md:col-span-4 xl:col-span-3">
          <!-- Education -->
          <div class="bg-[#fbede0] rounded-tl-3xl p-8 mb-4">
            <h3
              class="relative text-xl font-semibold py-4 tracking-[4px] before:absolute before:w-10 before:h-[2px] before:bg-gray-900 before:left-0 before:bottom-0 mb-6"
            >
              Educación
            </h3>
            <div class="mb-3">
              <h4 class="font-medium text-sm">
                I.E.S.P.P PEDRO MONGE CÓRDOVA - Jauja
              </h4>
              <p class="text-gray-500 text-sm">01/2018 - 12/2022</p>
              <p class="text-gray-500 text-sm">
                ESTUDIO SUPERIOR, EDUCACIÓN INICIAL
              </p>
            </div>
            <div class="mb-3">
              <h4 class="font-medium text-sm">EDUCACIÓN SECUNDARIA</h4>
              <p class="text-gray-500 text-sm">01/2013 - 12/2017</p>
              <p class="text-gray-500 text-sm">I.E SAN JOSÉ - JAUJA</p>
            </div>
            <div class="mb-3">
              <h4 class="font-medium text-sm">EDUCACIÓN PRIMARIA</h4>
              <p class="text-gray-500 text-sm">01/2007 - 12/2012</p>
              <p class="text-gray-500 text-sm">I.E 30568 Huala Yauli - Jauja</p>
            </div>
          </div>
          <!-- Contact -->
          <div class="bg-[#fbebeb] rounded-tr-3xl p-8">
            <h3
              class="relative text-xl font-semibold py-4 tracking-[4px] before:absolute before:w-10 before:h-[2px] before:bg-gray-900 before:left-0 before:bottom-0 mb-6"
            >
              Contacto
            </h3>
            <div class="mb-6">
              <h4 class="font-medium">Celular</h4>
              <p class="text-gray-500 text-sm">901884710</p>
            </div>
            <div class="mb-6">
              <h4 class="font-medium">Email</h4>
              <p class="text-gray-500 text-sm">
                {{ 'benitovargasmabel65@gmail.com ' }}
              </p>
            </div>
            <div>
              <h4 class="font-medium">Dirección</h4>
              <p class="text-gray-500 text-sm">Calle Real SN Huala/Yauli</p>
              <p class="text-gray-500 text-sm">Yauli - Perú</p>
            </div>
          </div>
          <!-- Certificados -->
          <div class="bg-[#fbebeb] rounded-tr-3xl p-8 mt-5">
            <h3
              class="relative text-xl font-semibold py-4 tracking-[4px] before:absolute before:w-10 before:h-[2px] before:bg-gray-900 before:left-0 before:bottom-0 mb-6"
            >
              Certificados
            </h3>
            <div class="mb-6">
              <h4 class="font-medium text-sm">
                {{
                  'ACTUALIZACIONES DESAFÍO DE LA ENSEÑANZA EN LOS NUEVOS AMBIENTES DE APRENDIZAJE'
                    | titlecase
                }}
              </h4>
              <p class="text-gray-500 text-sm mt-2">04/07/22</p>
            </div>
            <div class="mb-6">
              <h4 class="font-medium text-sm">
                {{
                  'AUXILIAR EN EDUCACIÓN INICIAL'
                    | titlecase
                }}
              </h4>
              <p class="text-gray-500 text-sm mt-2">05/10/23</p>
            </div>
          </div>

          
        </section>
        <section class="col-span-12 md:col-span-8 xl:col-span-9">
          <!-- Experience -->
          <div class="bg-[#f8f3ef] rounded-tl-3xl rounded-br-3xl p-8 mb-4">
            <h3
              class="relative text-xl font-semibold py-4 tracking-[4px] before:absolute before:w-10 before:h-[2px] before:bg-gray-900 before:left-0 before:bottom-0 mb-6"
            >
              Experiencia
            </h3>

            @for (item of experiencia; track $index) {
            <div class="flex flex-col md:flex-row gap-8 w-full">
              <div class="text-gray-500 text-sm w-full md:w-[30%]">
                <p>{{ item.fecha }}</p>
                <p>{{ item.lugar | titlecase }}</p>
              </div>
              <div class="w-full md:w-[70%]">
                <h4 class="font-semibold">{{ item.puesto }}</h4>
                <p class="text-gray-500 text-sm">
                  {{ item.description }}
                </p>
              </div>
            </div>
            }
          </div>
          <!-- Skills -->
          <div class="bg-[#fbede0] rounded-tr-3xl rounded-bl-3xl p-8">
            <h3
              class="relative text-xl font-semibold py-4 tracking-[4px] before:absolute before:w-10 before:h-[2px] before:bg-gray-900 before:left-0 before:bottom-0 mb-6"
            >
              Aptitudes
            </h3>
            <div class="flex flex-col gap-2 mb-4">
              @for (item of aptitudes; track $index) {
              <div class="flex items-center justify-between gap-4">
                <span>{{ item }}</span>
                <div class="flex items-center gap-1">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 24 24"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g>
                      <path fill="none" d="M0 0h24v24H0z"></path>
                      <circle cx="12" cy="12" r="10"></circle>
                    </g>
                  </svg>
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 24 24"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g>
                      <path fill="none" d="M0 0h24v24H0z"></path>
                      <circle cx="12" cy="12" r="10"></circle>
                    </g>
                  </svg>
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 24 24"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g>
                      <path fill="none" d="M0 0h24v24H0z"></path>
                      <circle cx="12" cy="12" r="10"></circle>
                    </g>
                  </svg>
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 24 24"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g>
                      <path fill="none" d="M0 0h24v24H0z"></path>
                      <circle cx="12" cy="12" r="10"></circle>
                    </g>
                  </svg>
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 24 24"
                    class="opacity-[.2]"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g>
                      <path fill="none" d="M0 0h24v24H0z"></path>
                      <circle cx="12" cy="12" r="10"></circle>
                    </g>
                  </svg>
                </div>
              </div>
              }
            </div>
          </div>
        </section>
      </div>
    </article>
  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class CurriculomPage {
  experiencia = [
    {
      fecha: '01/23 - actualidad',
      lugar: 'PROGRAMA NACIONAL, CUNA MAS',
      puesto: 'Madre Cuidadora',
      description: 'Diseño y ejecución de planes de cuidado y estimulación personalizados, adaptados a las necesidades y características de cada niño. Colaboración estrecha con otros profesionales del programa, así como con los padres de familia, para asegurar una atención integral y coordinada para cada niño. Promoción de un ambiente seguro, afectuoso y estimulante que propiciara el desarrollo socioemocional positivo de los niños, cultivando valores de respeto, tolerancia y cooperación.',
    },
    {
      fecha: '01/22 - 12/22',
      lugar: 'I. E. SAGRADO CORAZÓN DE JESÚS - JAUJA',
      puesto: 'Practicas Pre-Profesionales',
      description: 'Observación y evaluación continua del progreso de los niños, identificando áreas de mejora y aplicando ajustes en el plan de enseñanza según sea necesario.',
    },
    {
      fecha: '01/21 - 12/21',
      lugar: 'I. E. ISABEL SUÁREZ DE AMAYA - JAUJA',
      puesto: 'Practicas Pre-Profesionales',
      description: 'Colaboración activa con el equipo docente y los padres de familia para garantizar una educación integral y de calidad.',
    },
    {
      fecha: '01/20 - 12/20',
      lugar: 'I. E. VIRGEN DE LOURDES - JAUJA',
      puesto: 'Practicas Pre-Profesionales',
      description: 'Implementación de estrategias pedagógicas inclusivas que atienden las diferencias individuales y promueven la participación de todos los niños',
    },
    {
      fecha: '01/19 - 12/19',
      lugar: 'I. E. INTEGRADO HATUN XAUXA - SAUSA',
      puesto: 'Practicas Pre-Profesionales',
      description: 'Diseño de actividades lúdicas y creativas que estimulan el desarrollo del lenguaje, la motricidad y la creatividad.',
    },
    {
      fecha: '01/18 - 12/18',
      lugar: 'I. E. 415 YANAMARCA - ACOLLA ',
      puesto: 'Practicas Pre-Profesionales',
      description: 'Fomente valores como la empatía, el respeto y la colaboración, promoviendo un ambiente de convivencia positiva dentro del aula.',
    },
  ];

  aptitudes = [
    'Poseer capacidad de motivar, inspirar y animar a los niños.',
    'Tener paciencia, tolerancia y entusiasmo.',
    'Saber escuchar y observar.',
    'Capacidad creativas y prácticas para hallar actividades que despierten interés en los niños y estimulen su aprendizaje',
    'Tener vocación pedagógica',
    'Contextualizar el aprendizaje de los niños de acuerdo asu contexto.',
    'Capacidad para mantener disciplina.',
    'Conocimientos en el trabajo con niños del I - II ciclo',
    'Disposición para que el aprendizaje sea significativo.sd',
  ];
}
