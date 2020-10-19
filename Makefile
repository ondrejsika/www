update-sessions-yml-from-training-crm:
	curl -o packages/data/training/sessions.yml https://trainingcrm.sika.io/views/sessions_yaml/
	git add packages/data/training/sessions.yml
	git commit -m "[generated] Update sessions.yml from Training CRM"
