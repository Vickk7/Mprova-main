document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('inscricaoForm');
    const modal = document.getElementById('successModal');
    const closeBtn = document.querySelector('.close-modal');

    form.addEventListener('submit', function (e) {
        e.preventDefault();

       
        const checkboxes = document.querySelectorAll('input[name="olimpiadas[]"]:checked');
        if (checkboxes.length === 0) {
            alert('Por favor, selecione pelo menos uma olimpíada!');
            return;
        }

        
        showSuccessModal();
    });

    function showSuccessModal() {
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden'; 
    }

   
    closeBtn.addEventListener('click', function () {
        closeModal();
    });

   
    modal.addEventListener('click', function (e) {
        if (e.target === modal) {
            closeModal();
        }
    });

    function closeModal() {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
        
        form.reset();
    }

    
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && modal.style.display === 'flex') {
            closeModal();
        }
    });


    const telefoneInput = document.getElementById('telefone');
    telefoneInput.addEventListener('input', function (e) {
        let value = e.target.value.replace(/\D/g, '');
        if (value.length > 11) value = value.slice(0, 11);

        if (value.length > 6) {
            value = value.replace(/^(\d{2})(\d{5})(\d{0,4}).*/, '($1) $2-$3');
        } else if (value.length > 2) {
            value = value.replace(/^(\d{2})(\d{0,5})/, '($1) $2');
        } else if (value.length > 0) {
            value = value.replace(/^(\d*)/, '($1');
        }

        e.target.value = value;
    });
});
