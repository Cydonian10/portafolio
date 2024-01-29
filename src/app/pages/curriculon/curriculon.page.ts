import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-curriculom',
  standalone: true,
  imports: [],
  template: `
   <article class="cv max-w-[1100px] mx-auto p-4 md:p-8">
  <!-- Profile -->
  <div class="grid grid-cols-12 gap-4 mb-4">
    <section class="col-span-12 md:col-span-4 xl:col-span-3">
      <div>
        <img
          src="assets/gabriel.jpg"
          class="w-full h-full object-contain rounded-tr-3xl rounded-bl-3xl mb-4"
        />
      </div>
    </section>
    <section class="col-span-12 md:col-span-8 xl:col-span-9 py-4 md:px-8">
      <!-- About -->
      <div>
        <h1 class="text-5xl md:text-7xl">Gabriel</h1>
        <h1 class="text-5xl md:text-7xl font-bold">Vásquez</h1>
        <p class="md:text-2xl text-gray-500">Ingeniero de sistemas e informática</p>
      </div>
      <h3 class="relative text-xl font-semibold py-4 tracking-[4px] before:absolute before:w-10 before:h-[2px] before:bg-gray-900 before:left-0 before:bottom-0 mb-2">
        Perfil
      </h3>
      <p class="text-gray-500">
      Soy Gabriel Vásquez, egresado en Ingeniería Informática y apasionado por el desarrollo web. Mi experiencia incluye la creación exitosa de sistemas de inventarios, préstamo de productos, asistencias, y tramites. Mi enfoque es la calidad y la eficiencia en cada proyecto.
      </p>
    </section>
  </div>

  <div class="grid grid-cols-12 gap-4 mb-4">
    <section class="col-span-12 md:col-span-4 xl:col-span-3">
      <!-- Education -->
      <div class="bg-[#fbede0] rounded-tl-3xl p-8 mb-4">
        <h3 class="relative text-xl font-semibold py-4 tracking-[4px] before:absolute before:w-10 before:h-[2px] before:bg-gray-900 before:left-0 before:bottom-0 mb-6">
          Educación
        </h3>
        <div class="mb-6">
          <p class="text-gray-500 text-sm">2017 - 2023</p>
          <h4 class="font-medium">Ingeniero de Sistemas e Informatica</h4>
          <p class="text-gray-500 text-sm">
            Universidad Continental
          </p>
        </div>
        <div>
          <p class="text-gray-500 text-sm">2023 - presente</p>
          <h4 class="font-medium">Desarrollo Web</h4>
          <p class="text-gray-500 text-sm">
            Platzi platforma de educación virtual
          </p>
        </div>
      </div>
      <!-- Contact -->
      <div class="bg-[#fbebeb] rounded-tr-3xl p-8">
        <h3 class="relative text-xl font-semibold py-4 tracking-[4px] before:absolute before:w-10 before:h-[2px] before:bg-gray-900 before:left-0 before:bottom-0 mb-6">
          Contacto
        </h3>
        <div class="mb-6">
          <h4 class="font-medium">Celular</h4>
          <p class="text-gray-500 text-sm">943 744 245</p>
        </div>
        <div class="mb-6">
          <h4 class="font-medium">Email</h4>
          <p class="text-gray-500 text-sm">{{ "zudex85@gmail.com" }}</p>
        </div>
        <div>
          <h4 class="font-medium">Dirección</h4>
          <p class="text-gray-500 text-sm">A.V Ricardo Palama 633</p>
          <p class="text-gray-500 text-sm">Jauja - Perú</p>
        </div>
      </div>
    </section>
    <section class="col-span-12 md:col-span-8 xl:col-span-9">
      <!-- Experience -->
      <div class="bg-[#f8f3ef] rounded-tl-3xl rounded-br-3xl p-8 mb-4">
        <h3 class="relative text-xl font-semibold py-4 tracking-[4px] before:absolute before:w-10 before:h-[2px] before:bg-gray-900 before:left-0 before:bottom-0 mb-6">
          Experiencia
        </h3>
        <div class="flex flex-col md:flex-row gap-8 w-full mb-4">
          <div class="text-gray-500 text-sm w-full md:w-[30%]">
            <p>2023 - presente</p>
            <p>Temine la carrera de Ingenieria de Sistemas</p>
          </div>
          <div class="w-full md:w-[70%]">
            <h4 class="font-semibold">Estudiante</h4>
            <p class="text-gray-500 text-sm">
              Dedicando un año a la mejora continua, he ampliado mi formación en desarrollo web a través de cursos en plataformas líderes como Platzi y Udemy. Esta inversión en educación adicional me ha permitido adquirir nuevas habilidades y mantenerme actualizado con las últimas tendencias en el campo. Mi compromiso con la excelencia y la especialización constante refleja mi pasión por ofrecer productos de la más alta calidad.
            </p>
          </div>
        </div>
        <div class="flex flex-col md:flex-row gap-8 w-full mb-4">
          <div class="text-gray-500 text-sm w-full md:w-[30%]">
            <p>2021 - 2022</p>
            <p>Escuelita Virgen de Fátima</p>
          </div>
          <div class="w-full md:w-[70%]">
            <h4 class="font-semibold">Desarrollo de software</h4>
            <p class="text-gray-500 text-sm">
            Creación de un sistema de asistencias para el Colegio Virgen de Fátima. Este proyecto no solo automatizó el registro de asistencias, sino que también integró un sistema de consultas para padres de familia, facilitando una comunicación transparente y efectiva entre la institución educativa y los progenitores
            </p>
          </div>
        </div>
        <div class="flex flex-col md:flex-row gap-8 w-full">
          <div class="text-gray-500 text-sm w-full md:w-[30%]">
            <p>2020 - 2021</p>
            <p>GPS Energia</p>
          </div>
          <div class="w-full md:w-[70%]">
            <h4 class="font-semibold">Desarrollo de software</h4>
            <p class="text-gray-500 text-sm">
            Lideré la creación de un sistema de inventarios innovador, complementado con un eficiente sistema de préstamos de materiales. Mi contribución fue crucial al implementar un sistema de monitoreo que optimizó significativamente la gestión de inventarios, mejorando la eficiencia operativa de la empresa.
            </p>
          </div>
        </div>
      </div>
      <!-- Skills -->
      <div class="bg-[#fbede0] rounded-tr-3xl rounded-bl-3xl p-8">
        <h3 class="relative text-xl font-semibold py-4 tracking-[4px] before:absolute before:w-10 before:h-[2px] before:bg-gray-900 before:left-0 before:bottom-0 mb-6">
          Habilidades
        </h3>
        <div class="flex flex-col lg:flex-row lg:items-center gap-2 lg:gap-10 mb-4">
          <div class="flex items-center justify-between lg:justify-start gap-4">
            <span>JavaScript</span>
            <div class="flex items-center gap-1">
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <g>
                        <path fill="none" d="M0 0h24v24H0z"></path>
                        <circle cx="12" cy="12" r="10"></circle>
                    </g>
                </svg>
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <g>
                        <path fill="none" d="M0 0h24v24H0z"></path>
                        <circle cx="12" cy="12" r="10"></circle>
                    </g>
                </svg>
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <g>
                        <path fill="none" d="M0 0h24v24H0z"></path>
                        <circle cx="12" cy="12" r="10"></circle>
                    </g>
                </svg>
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24"  height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <g>
                        <path fill="none" d="M0 0h24v24H0z"></path>
                        <circle cx="12" cy="12" r="10"></circle>
                    </g>
                </svg>
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class="opacity-[.2]" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <g>
                        <path fill="none" d="M0 0h24v24H0z"></path>
                        <circle cx="12" cy="12" r="10"></circle>
                    </g>
                </svg>
            </div>
          </div>
          <div class="flex items-center justify-between lg:justify-start gap-4">
            <span>Html y Css</span>
            <div class="flex items-center gap-1">
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <g>
                        <path fill="none" d="M0 0h24v24H0z"></path>
                        <circle cx="12" cy="12" r="10"></circle>
                    </g>
                </svg>
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <g>
                        <path fill="none" d="M0 0h24v24H0z"></path>
                        <circle cx="12" cy="12" r="10"></circle>
                    </g>
                </svg>
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <g>
                        <path fill="none" d="M0 0h24v24H0z"></path>
                        <circle cx="12" cy="12" r="10"></circle>
                    </g>
                </svg>
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class="opacity-[.2]" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <g>
                        <path fill="none" d="M0 0h24v24H0z"></path>
                        <circle cx="12" cy="12" r="10"></circle>
                    </g>
                </svg>
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class="opacity-[.2]" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <g>
                        <path fill="none" d="M0 0h24v24H0z"></path>
                        <circle cx="12" cy="12" r="10"></circle>
                    </g>
                </svg>
            </div>
          </div>
          <div class="flex items-center justify-between lg:justify-start gap-4">
            <span>.Net C#</span>
            <div class="flex items-center gap-1">
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <g>
                        <path fill="none" d="M0 0h24v24H0z"></path>
                        <circle cx="12" cy="12" r="10"></circle>
                    </g>
                </svg>
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <g>
                        <path fill="none" d="M0 0h24v24H0z"></path>
                        <circle cx="12" cy="12" r="10"></circle>
                    </g>
                </svg>
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <g>
                        <path fill="none" d="M0 0h24v24H0z"></path>
                        <circle cx="12" cy="12" r="10"></circle>
                    </g>
                </svg>
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <g>
                        <path fill="none" d="M0 0h24v24H0z"></path>
                        <circle cx="12" cy="12" r="10"></circle>
                    </g>
                </svg>
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class="opacity-[.2]" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <g>
                        <path fill="none" d="M0 0h24v24H0z"></path>
                        <circle cx="12" cy="12" r="10"></circle>
                    </g>
                </svg>
            </div>
          </div>
        </div>
        <div class="flex flex-col lg:flex-row :items-center gap-2 lg:gap-10">
          <div class="flex items-center justify-between lg:justify-start gap-4">
            <span>Docker</span>
            <div class="flex items-center gap-1">
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <g>
                        <path fill="none" d="M0 0h24v24H0z"></path>
                        <circle cx="12" cy="12" r="10"></circle>
                    </g>
                </svg>
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <g>
                        <path fill="none" d="M0 0h24v24H0z"></path>
                        <circle cx="12" cy="12" r="10"></circle>
                    </g>
                </svg>
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <g>
                        <path fill="none" d="M0 0h24v24H0z"></path>
                        <circle cx="12" cy="12" r="10"></circle>
                    </g>
                </svg>
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <g>
                        <path fill="none" d="M0 0h24v24H0z"></path>
                        <circle cx="12" cy="12" r="10"></circle>
                    </g>
                </svg>
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class="opacity-[.2]" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <g>
                        <path fill="none" d="M0 0h24v24H0z"></path>
                        <circle cx="12" cy="12" r="10"></circle>
                    </g>
                </svg>
            </div>
          </div>
          <div class="flex items-center justify-between lg:justify-start gap-4">
            <span>Azure</span>
            <div class="flex items-center gap-1">
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <g>
                        <path fill="none" d="M0 0h24v24H0z"></path>
                        <circle cx="12" cy="12" r="10"></circle>
                    </g>
                </svg>
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <g>
                        <path fill="none" d="M0 0h24v24H0z"></path>
                        <circle cx="12" cy="12" r="10"></circle>
                    </g>
                </svg>
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <g>
                        <path fill="none" d="M0 0h24v24H0z"></path>
                        <circle cx="12" cy="12" r="10"></circle>
                    </g>
                </svg>
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <g>
                        <path fill="none" d="M0 0h24v24H0z"></path>
                        <circle cx="12" cy="12" r="10"></circle>
                    </g>
                </svg>
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <g>
                        <path fill="none" d="M0 0h24v24H0z"></path>
                        <circle cx="12" cy="12" r="10"></circle>
                    </g>
                </svg>
            </div>
          </div>
          <div class="flex items-center justify-between lg:justify-start gap-4">
            <span>Base de Datos SQL</span>
            <div class="flex items-center gap-1">
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <g>
                        <path fill="none" d="M0 0h24v24H0z"></path>
                        <circle cx="12" cy="12" r="10"></circle>
                    </g>
                </svg>
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24"  height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <g>
                        <path fill="none" d="M0 0h24v24H0z"></path>
                        <circle cx="12" cy="12" r="10"></circle>
                    </g>
                </svg>
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24"  height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <g>
                        <path fill="none" d="M0 0h24v24H0z"></path>
                        <circle cx="12" cy="12" r="10"></circle>
                    </g>
                </svg>
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24"  height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <g>
                        <path fill="none" d="M0 0h24v24H0z"></path>
                        <circle cx="12" cy="12" r="10"></circle>
                    </g>
                </svg>
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class="opacity-[.2]" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <g>
                        <path fill="none" d="M0 0h24v24H0z"></path>
                        <circle cx="12" cy="12" r="10"></circle>
                    </g>
                </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</article>
  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class CurriculomPage { }