let accordion = document.querySelectorAll('.accordion');
accordion.forEach(item => {
    item.addEventListener('click', () => {
        item.classList.toggle("active")
    })
})

async function accordionData() {
        const response = await fetch("accordion-data.json");
        const data = await response.json();

        const firstSectionHeading = data.blocks[0].heading
        const firstSectionContent = data.blocks[0].content
        const secondSectionHeading = data.blocks[1].heading
        const secondSectionContent = data.blocks[1].content
        const thirdSectionHeading = data.blocks[2].heading
        const thirdSectionContent = data.blocks[2].content

        document.getElementById('section-1-heading').textContent = firstSectionHeading
        document.getElementById('section-1-content').textContent = firstSectionContent
        document.getElementById('section-2-heading').textContent = secondSectionHeading
        document.getElementById('section-2-content').textContent = secondSectionContent
        document.getElementById('section-3-heading').textContent = thirdSectionHeading
        document.getElementById('section-3-content').textContent = thirdSectionContent
    } 
    accordionData()